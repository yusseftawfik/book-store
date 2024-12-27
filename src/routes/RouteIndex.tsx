import { Route, Routes } from 'react-router-dom';

import Main from 'src/layout/Main';

import { PRIVATEPATHS } from '../core/enums/paths.enums';
import { PrivateRoute } from '../core/models/generic.model';
import Author from '../pages/Author.page';
import Books from '../pages/Books.page';
import Shop from '../pages/Shop.page';
import Stores from '../pages/Stores.page';

const privateRoutes: PrivateRoute[] = [
    { path: PRIVATEPATHS.Shop, component: Shop },
    { path: PRIVATEPATHS.Stores, component: Stores },
    { path: PRIVATEPATHS.Author, component: Author },
    { path: PRIVATEPATHS.Books, component: Books },
];

const RouteIndex = () => {
    return (
        <Routes>
            {privateRoutes.map((route: any, idx: number) => (
                <Route
                    key={idx}
                    path={route.path}
                    element={
                        <Main>
                            <route.component />
                        </Main>
                    }
                />
            ))}
        </Routes>
    );
};

export default RouteIndex;
