import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { getReducerStore } from './getReducerStore';
export { getReducerStore } from './getReducerStore';
export { ReduxProvider } from './ReduxProvider';

export type RootState = ReturnType<
  ReturnType<typeof getReducerStore>['getState']
>;

export type AppDispatch = ReturnType<typeof getReducerStore>['dispatch'];

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
