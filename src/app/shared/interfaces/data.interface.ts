export interface RowData {
  thumbnails: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
}

export interface RawData {
  etag: string;
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

export interface PageInfo {
  totalResult: number;
  resultPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}

export interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Title {
  videoId: string;
  title: string;
}
