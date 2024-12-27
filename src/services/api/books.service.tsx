import { AxiosResponse } from 'axios';

import API from '../api';

class BooksService {
    private readonly getAllBooksURL = `/db.json`;

    getAllBooks(): Promise<AxiosResponse<any>> {
        return API.get(this.getAllBooksURL);
    }
}

const booksServiceInstance = new BooksService();
export default booksServiceInstance;
