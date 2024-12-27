import { IStore } from './store.model';

export interface IBook {
    id: number;
    title: string;
    author: string;
    stores: Array<IStore>;
    cover: string;
    price?: number;
    color?: `primary` | `secondary`;
}
