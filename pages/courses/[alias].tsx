import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;
const url = process.env.NEXT_PUBLIC_DOMAIN;

function Course({ menu, page, products }: CourseProps): JSX.Element {
	return (
		<>
			{products && products.length}
			{JSON.stringify(menu && menu)}
			{JSON.stringify(page && page)}
		</>
	);
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(url + '/api/top-page/find', {
		firstCategory
	});
	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<MenuItem[]>(url + '/api/top-page/find', {
		firstCategory
	});
	const { data: page } = await axios.get<TopPageModel>(url + '/api/top-page/byAlias/' + params.alias);
	const { data: products } = await axios.post<ProductModel[]>(url + '/api/product/find', {
		category: page.category,
		limit: 10
	});

	return {
		props: {
			menu,
			firstCategory,
			page,
			products
		}
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
}