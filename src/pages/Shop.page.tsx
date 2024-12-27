import { useEffect } from 'react';

import { PRIVATEPATHS } from 'src/core/enums/paths.enums';
import { getAllBooksThunk } from 'src/redux/features/books.slice';
import { useAppDispatch } from 'src/redux/hooks';
import CardContainer from 'src/shared/CardContainer';

const Shop = () => {
    //----------------------------------------------------------------
    const dispatch = useAppDispatch();
    //----------------------------------------------------------------
    useEffect(() => {
        dispatch(getAllBooksThunk(null));
    });
    //----------------------------------------------------------------
    //----------------------------------------------------------------
    return (
        <div className="flex flex-col gap-10">
            <CardContainer title="Browse by Stores" link={PRIVATEPATHS.Stores} items={[1, 2, 3, 4]} type="store" />
            <CardContainer title="Browse by Authors" link={PRIVATEPATHS.Author} items={[1, 2, 3, 4]} type="author" />
            <CardContainer title="Browse by Books" link={PRIVATEPATHS.Books} items={[1, 2, 3, 4]} type="book" />
        </div>
    );
};

export default Shop;
