import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { PRIVATEPATHS } from 'src/core/enums/paths.enums';

import AuthorCard from './AuthorCard';
import BookCard from './BookCard';
import StoreCard from './StoreCard';

type Props = {
    title: string;
    link: PRIVATEPATHS;
    items: any[];
    type: `store` | `book` | `author`;
};

const CardContainer: FC<Props> = ({ title, link, items, type }): ReactElement => (
    <div className="flex flex-col gap-5">
        <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-medium">{title}</h2>
            <Link
                to={link}
                className="rounded-md bg-[#D86128] px-4 py-2 text-sm font-medium text-white hover:bg-[#BF5523]"
            >
                View All
            </Link>
        </div>
        <div className="-mx-7">
            <div className="scroll-container">
                {type === `store` && items?.map((item, index) => <StoreCard key={index} item={item} />)}
                {type === `book` && items?.map((item, index) => <BookCard key={index} item={item} />)}
                {type === `author` && items?.map((item, index) => <AuthorCard key={index} item={item} />)}
            </div>
        </div>
    </div>
);

export default CardContainer;
