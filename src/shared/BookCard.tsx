import { FC } from 'react';

import { IBook } from 'src/core/models/book.model';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';

type Props = {
    item: IBook;
};

const BookCard: FC<Props> = ({ item }) => {
    return (
        <div className="grid h-52 !min-w-[450px] grid-cols-[1fr,3fr] gap-4 rounded-lg bg-white px-5 py-6 shadow-sm">
            <div
                className={`${item?.color === `primary` ? `bg-[#FFEBE1]` : `bg-[#E1F4FF]`} relative flex h-full w-32
                items-center justify-center overflow-hidden rounded-xl rounded-ee-md
                rounded-es-xl rounded-se-md rounded-ss-xl
                object-contain object-center
                p-4 text-center`}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        boxShadow: `-20px 0 30px rgba(0, 0, 0, 0.1)`, // Smooth shadow on the left
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        boxShadow: `
                                inset 10px 0 10px rgba(0, 0, 0, 0.05),
                                inset 15px 0 20px rgba(0, 0, 0, 0.03)
                        `,
                    }}
                />
                <div className="relative text-center text-sm font-medium">{item?.title}</div>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-between gap-2 overflow-hidden">
                <div className="flex flex-col items-start justify-start gap-px">
                    <span className="text-sm font-medium text-[#000000]">{item?.title}</span>
                    <span className="text-sm font-normal text-[#8F8F8F]">{`by ${item?.author}`}</span>
                </div>
                {item?.stores?.length > 0 && (
                    <div className="flex w-full flex-col items-start justify-center overflow-x-scroll">
                        <span className="text-sm font-normal text-[#8F8F8F]">{`Stores:`}</span>
                        <div className="flex w-full gap-1.5">
                            {item?.stores?.map((store) => (
                                <div
                                    className="flex w-60 flex-col items-center
                                    justify-between gap-px rounded-lg bg-[#FFF6F1] p-2"
                                >
                                    <div className="whitespace-nowrap text-sm font-medium">{store.title}</div>
                                    <div className="text-base font-semibold text-[#E9692C]">{`$${
                                        store.price || 0
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

export default BookCard;
