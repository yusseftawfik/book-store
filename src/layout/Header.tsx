import { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: FC = (): ReactElement => {
    //---------------------------------------------------------------------------------------------------------
    const location = useLocation();
    //---------------------------------------------------------------------------------------------------------
    const pathSegments = location.pathname.split(`/`).filter(Boolean);
    //---------------------------------------------------------------------------------------------------------
    const title = pathSegments[pathSegments.length - 1] || `Shop`;
    //---------------------------------------------------------------------------------------------------------
    const breadcrumbLinks = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join(`/`)}`;
        const isLast = index === pathSegments.length - 1;
        return isLast ? (
            <span key={index} className="breadcrumb-item active">
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </span>
        ) : (
            <Link key={index} to={path} className="breadcrumb-item">
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
        );
    });
    //---------------------------------------------------------------------------------------------------------
    return (
        <div className="flex w-full items-center justify-between border-b border-[#B0B0B0] pb-8">
            <div className="title-breadcrumb">
                <h1 className="title">{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                <ol className="breadcrumb">
                    <Link to="/" className="breadcrumb-item">
                        Shop
                    </Link>
                    {breadcrumbLinks}
                </ol>
            </div>
            <div className="flex items-center gap-4">
                <div className="h-[42px] w-[42px] overflow-hidden rounded-md text-xl font-normal">
                    <img src="/user.png" alt="user" className="h-full w-full object-cover" />
                </div>
                <span className="text-lg font-medium text-[#3E435D]">Jacob Jones</span>
            </div>
        </div>
    );
};

export default Header;
