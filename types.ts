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
export interface NewsData {
    articles?: NewsItem[];
}

export interface SourcesData {
    sources?: SourcesItem[];
}
