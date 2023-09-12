export interface NewsItem {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    source: { name: string };
}
export interface SourceItem {
    name: string;
    id: string;
}
