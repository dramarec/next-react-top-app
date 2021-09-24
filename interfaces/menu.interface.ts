export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: PageItem[];
}


// declare module namespace {

//     export interface Id {
//         secondCategory: string;
//     }

//     export interface Page {
//         alias: string;
//         title: string;
//         _id: string;
//         category: string;
//     }

//     export interface RootObject {
//         _id: Id;
//         pages: Page[];
//     }

// }
