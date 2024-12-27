import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IAuthor } from 'src/core/models/author.model';

type Props = {
    item: IAuthor;
};

const AuthorCard: FC<Props> = ({ item }) => (
    <div className="grid h-52 !min-w-[450px] grid-cols-[1fr,3fr] gap-4 rounded-lg bg-white px-5 py-6 shadow-sm">
        <div className="h-full w-32 overflow-hidden rounded-md bg-[#FFEBE1]">
            <img src={item?.avatar} alt={item?.name} className="h-full w-full object-cover object-center" />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-between">
            <div className="flex flex-col items-start justify-start gap-px">
                <span className="text-sm font-medium text-[#000000]">{item?.name}</span>
                <div className="flex items-center gap-px">
                    <span className="text-sm font-normal text-[#BF5523]">{`Publish books:`}</span>
                    <span className="text-sm font-semibold text-[#BF5523]">{item?.booksPublished}</span>
                </div>
            </div>
            <div className="flex w-full items-center justify-end">
                <Link
                    to={`/`}
                    className="rounded-md bg-[#BF5523] px-4 py-2 text-sm font-medium text-white hover:bg-[#D86128]"
                >
                    View profile
                </Link>
            </div>
        </div>
    </div>
);

export default AuthorCard;
