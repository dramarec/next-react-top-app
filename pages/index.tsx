import { GetStaticProps } from 'next';
import { useState } from "react";
import axios from 'axios';
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(2);
    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Htag tag='h2'>Текст</Htag>
            <Htag tag='h3'>Текст</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Paragraph</P>
            <P size='m'>Paragraph</P>
            <P size='s'>Paragraph</P>
            <Tag size='s'>small</Tag>
            <Tag size='m'>small</Tag>
            <Tag size='s' color='green'>small</Tag>
            <Tag size='s' color='grey'>small</Tag>
            <Tag size='m' color='primary'>small</Tag>
            <Tag size='m' color='red'>small</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios
        .post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory
        });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}