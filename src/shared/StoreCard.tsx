import React, { FC } from 'react';

type Props = {
    item: any;
};

const StoreCard: FC<Props> = ({ item }) => {
    return <div className="h-80 w-1/3 bg-[#FFFFF]">{item?.name}</div>;
};

export default StoreCard;
