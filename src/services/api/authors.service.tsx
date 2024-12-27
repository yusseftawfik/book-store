import { AxiosResponse } from 'axios';
import { IAuthor } from 'src/core/models/author.model';

import API from '../api';

class AuthorService {
    private readonly getAllAuthorsURL = `/db.json`;

    getAllAuthors(): Promise<AxiosResponse<Array<IAuthor>>> {
        return API.get(this.getAllAuthorsURL);
    }
}

const AuthorServiceInstance = new AuthorService();
export default AuthorServiceInstance;
