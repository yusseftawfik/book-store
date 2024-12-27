import { ReactComponent as AuthorIcon } from '../../icons/author.svg';
import { ReactComponent as BookIcon } from '../../icons/books.svg';
import { ReactComponent as ShopIcon } from '../../icons/dashboard.svg';
import { ReactComponent as StoreIcon } from '../../icons/store.svg';
import { PRIVATEPATHS } from '../enums/paths.enums';
import { ISidebarItemModel } from '../models/generic.model';

const sidebarItems: ISidebarItemModel[] = [
    {
        label: `Shop`,
        path: PRIVATEPATHS.Shop,
        icon: ShopIcon,
    },
    {
        label: `Stores`,
        path: PRIVATEPATHS.Stores,
        icon: StoreIcon,
    },
    {
        label: `Author`,
        path: PRIVATEPATHS.Author,
        icon: AuthorIcon,
    },
    {
        label: `Books`,
        path: PRIVATEPATHS.Books,
        icon: BookIcon,
    },
];

export default sidebarItems;
