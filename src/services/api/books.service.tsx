import { AxiosResponse } from 'axios';
import { IBook } from 'src/core/models/book.model';

import API from '../api';

class BooksService {
    private readonly getAllBooksURL = `/db.json`;

    getAllBooks(): Promise<AxiosResponse<Array<IBook>>> {
        return API.get(this.getAllBooksURL);
    }
}

const booksServiceInstance = new BooksService();
export default booksServiceInstance;
