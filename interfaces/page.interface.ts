export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HhData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface TopPageModel {
	tags: string[];
	_id: string;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages: TopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh: HhData;
}


// declare module namespace {

//     export interface Advantage {
//         _id: string;
//         title: string;
//         description: string;
//     }

//     export interface Hh {
//         _id: string;
//         count: number;
//         juniorSalary: number;
//         middleSalary: number;
//         seniorSalary: number;
//         updatedAt: Date;
//     }

//     export interface RootObject {
//         tags: string[];
//         _id: string;
//         secondCategory: string;
//         alias: string;
//         title: string;
//         category: string;
//         seoText: string;
//         tagsTitle: string;
//         metaTitle: string;
//         metaDescription: string;
//         firstCategory: number;
//         advantages: Advantage[];
//         createdAt: Date;
//         updatedAt: Date;
//         __v: number;
//         hh: Hh;
//         qas: any[];
//         addresses: any[];
//     }

// }

