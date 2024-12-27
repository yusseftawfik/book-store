import { JSX } from 'react';

import { SvgIconProps } from '@mui/material/SvgIcon';

import { PRIVATEPATHS } from '../enums/paths.enums';

export interface ErrorModel {
    errorTitle: string;
    errorMessage: string;
    statusCode: number | undefined;
    [key: string]: any;
}

export interface LocalizedResponse {
    ar: any;
    en: any;
}

export interface ISidebarItemModel {
    label?: string;
    icon?: (props: SvgIconProps) => JSX.Element | any;
    path?: PRIVATEPATHS;
    function?: () => void;
    isButton?: boolean;
    subMenu?: ISidebarItemModel[];
    divider?: boolean;
    disabled?: boolean;
}

export interface LightModel {
    id: number;
    name: string;
    arabic_name?: string;
    type?: string;
}

export interface SuccessResponse {
    message: LocalizedResponse;
    status: boolean;
}