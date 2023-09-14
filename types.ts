//      News.ts
//          |
//          |
//          V

export interface NewsItem {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    source: { name: string };
}

export interface SourcesItem {
    name: string;
    id: string;
}

//      Sources.ts
//          |
//          |
//          V

export interface NewsData {
    articles?: NewsItem[];
}

export interface SourcesData {
    sources?: SourcesItem[];
}

//      Loader.ts
//          |
//          |
//          V

export type Options = Record<string, string>;

export type LoaderItem = {
    endpoint: Endpoint;
    options: Options;
};

export type Data = {
    [sources: string]: string;
    status: string;
};

export type Callback = (data: NewsData) => void;

//       Controller.ts
//            |
//            |
//            V

export enum Endpoint {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}
//          App.ts
//            |
//            |
//            V

export interface AllData {
    articles?: NewsItem[];
    sources?: SourcesItem[];
}
