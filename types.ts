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

export enum NewsItemKey {
    UrlToImage = 'urlToImage',
    Author = 'author',
    PublishedAt = 'publishedAt',
    Title = 'Title',
    Description = 'description',
    Url = 'url',
    Source = 'source',
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
    endpoint: string;
    options: Options;
};

export type Data = {
    [sources: string]: string;
    status: string;
};

export type Callback = (data: NewsData) => void;

//          App.ts
//            |
//            |
//            V

export interface AllData {
    articles?: NewsItem[];
    sources?: SourcesItem[];
}
