export interface ICollection {
    collectionId: number;
    collectionName: string;
    collectionDescription: string;
    linkCount: number;
}

export interface ILink {
    linkId: number;
    collectionId: number;
    title: string;
    url: string;
}