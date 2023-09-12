//       News.ts
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

export type Options = {
    [apiKey: string]: string;
};
export type LoaderItem = {
    endpoint: string;
    options: Options;
};

export type Data = {
    [sources: string]: string;
    status: string;
};
