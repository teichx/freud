import { CaseReducer } from '@reduxjs/toolkit';

export type RefreshIdNameVariant = 'custom';

export type SoftRefreshProps = {
  globalId: string;
  customIds: Partial<{
    [name in RefreshIdNameVariant]: string;
  }>;
};

export type SoftRefreshStateProps = SoftRefreshProps;

export type useSoftRefreshProps = {
  id: string;
  getByName: (name: RefreshIdNameVariant) => string;
  refreshId: (name?: RefreshIdNameVariant) => void;
};

export type SoftRefresh = () => useSoftRefreshProps;

type CustomCaseReducer<T = void> = CaseReducer<
  SoftRefreshStateProps,
  { payload: T; type: string }
>;

export type SoftRefreshReducerActions = {
  refreshId: CustomCaseReducer<{
    name: RefreshIdNameVariant | undefined;
    id: string;
  }>;
};
