import { IBook } from './book.model';

export interface IStore {
    id: number;
    title: string;
    author: string;
    books: Array<IBook>;
    cover: string;
    price?: number;
}
