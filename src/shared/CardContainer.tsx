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

const CardContainer: FC<Props> = ({ title, link, items, type }): ReactElement => {
    //--------------------------------------------------------------------
    const cardType = {
        store: StoreCard,
        book: BookCard,
        author: AuthorCard,
    };
    //--------------------------------------------------------------------
    return (
        <div className="flex flex-col gap-5 overflow-x-hidden">
            <div className="flex w-full items-center justify-between">
                <h2>{title}</h2>
                <Link to={link}>View All</Link>
            </div>
            <div className="flex w-full justify-start gap-5 overflow-x-scroll">
                {items.map((item, index) => {
                    const CardComponent = cardType[type as keyof typeof cardType];
                    return <CardComponent key={index} {...item} />;
                })}
            </div>
        </div>
    );
};

export default CardContainer;
