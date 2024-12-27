import { FC } from 'react';

import { IStore } from 'src/core/models/store.model';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';

type Props = {
    item: IStore;
};

const StoreCard: FC<Props> = ({ item }) => {
    return (
        <div className="grid h-52 !min-w-[450px] grid-cols-[1fr,3fr] gap-4 rounded-lg bg-white px-5 py-6 shadow-sm">
            <div
                className="flex h-full w-32 items-center justify-center
                overflow-hidden rounded-md bg-[#FFEBE1] object-contain object-center"
            >
                <img src={item?.cover} alt={item?.title} className="aspect-square" />
            </div>
            <div className="flex h-full w-full flex-col items-start justify-between gap-2">
                <div className="flex flex-col items-start justify-start gap-px">
                    <span className="text-sm font-medium text-[#000000]">{item?.title}</span>
                    <span className="text-sm font-normal text-[#8F8F8F]">{item?.author}</span>
                </div>
                {item?.books?.length > 0 && (
                    <div className="flex w-full flex-col  items-start justify-center">
                        <span className="text-sm font-normal text-[#8F8F8F]">{`Books:`}</span>
                        <div className="flex w-full gap-1.5">
                            {item?.books?.map((book) => (
                                <div
                                    className="flex w-full flex-col items-center justify-between
                                    gap-px rounded-lg bg-[#FFF6F1] p-1.5"
                                >
                                    <div>{book.title}</div>
                                    <div className="text-base font-semibold text-[#E9692C]">{`$${
                                        book.price || 0
                                    }`}</div>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        className="h-7 w-16 !bg-[#2374BF] !px-2 !py-1 !capitalize !shadow-none"
                                    >
                                        Sell
                                        <ShoppingCartOutlinedIcon
                                            fontSize="small"
                                            className="ms-1.5 !h-4 !w-4 !text-white"
                                        />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoreCard;
