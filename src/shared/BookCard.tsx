import React, { FC } from 'react';

type Props = {
    item: any;
};

const BookCard: FC<Props> = ({ item }) => {
    return <div className="h-80 w-1/3 bg-[#FFFFF]">{item?.name}</div>;
};

export default BookCard;
