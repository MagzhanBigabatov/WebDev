export interface Album{
    userId: number;
    id: number;
    title: string;
}

export interface Albums_detail{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string
}