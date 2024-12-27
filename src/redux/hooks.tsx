import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { RootState } from './store';

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppDispatch = () => useDispatch<ThunkAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
