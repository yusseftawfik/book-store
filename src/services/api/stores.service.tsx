import { AxiosResponse } from 'axios';
import { IStore } from 'src/core/models/store.model';

import API from '../api';

class StoreService {
    private readonly getAllStoresURL = `/db.json`;

    getAllStores(): Promise<AxiosResponse<Array<IStore>>> {
        return API.get(this.getAllStoresURL);
    }
}

const StoreServiceInstance = new StoreService();
export default StoreServiceInstance;
