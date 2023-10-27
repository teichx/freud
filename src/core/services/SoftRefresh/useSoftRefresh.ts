import { useCallback } from 'react';

import { ulid } from 'ulid';

import { useAppDispatch, useAppSelector } from '~/common/reducer';

import { SoftRefreshSlice } from './SoftRefreshReducer';
import {
  RefreshIdNameVariant,
  SoftRefresh,
  useSoftRefreshProps,
} from './types';

export const useSoftRefresh: SoftRefresh = () => {
  const softRefresh = useAppSelector((x) => x.soft_refresh);
  const dispatch = useAppDispatch();

  const refreshId = useCallback<useSoftRefreshProps['refreshId']>(
    (name) =>
      dispatch(
        SoftRefreshSlice.actions.refreshId({
          name,
          id: ulid(),
        })
      ),
    [dispatch]
  );

  const getByName = useCallback(
    (name: RefreshIdNameVariant) => {
      const result = softRefresh.customIds[name];
      if (result) return result;

      const newId = ulid();
      dispatch(
        SoftRefreshSlice.actions.refreshId({
          name,
          id: newId,
        })
      );
      return newId;
    },
    [softRefresh, dispatch]
  );

  return {
    id: softRefresh.globalId,
    getByName,
    refreshId,
  };
};
