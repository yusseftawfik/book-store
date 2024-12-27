import { useEffect } from 'react';

import { PRIVATEPATHS } from 'src/core/enums/paths.enums';
import { getAllAuthorsThunk } from 'src/redux/features/authors.slice';
import { getAllBooksThunk } from 'src/redux/features/books.slice';
import { getAllStoresThunk } from 'src/redux/features/stores.slice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { RootState } from 'src/redux/store';
import CardContainer from 'src/shared/CardContainer';

const Shop = () => {
    //----------------------------------------------------------------
    const dispatch = useAppDispatch();
    //----------------------------------------------------------------
    useEffect(() => {
        dispatch(getAllBooksThunk(null));
        dispatch(getAllAuthorsThunk(null));
        dispatch(getAllStoresThunk(null));
    }, []);
    //----------------------------------------------------------------
    const books = useAppSelector((state: RootState) => state.bookState.books);
    const authors = useAppSelector((state: RootState) => state.authorState.authors);
    const stores = useAppSelector((state: RootState) => state.storeState.stores);
    //----------------------------------------------------------------
    return (
        <div className="flex flex-col gap-5">
            <CardContainer title="Browse by Stores" link={PRIVATEPATHS.Stores} items={stores} type="store" />
            <CardContainer title="Browse by Authors" link={PRIVATEPATHS.Author} items={authors} type="author" />
            <CardContainer title="Browse by Books" link={PRIVATEPATHS.Books} items={books} type="book" />
        </div>
    );
};

export default Shop;
