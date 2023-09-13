import { useCallback } from 'react';

import { v4 } from 'uuid';

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
          id: v4(),
        })
      ),
    [dispatch]
  );

  const getByName = useCallback(
    (name: RefreshIdNameVariant) => {
      const result = softRefresh.customIds[name];
      if (result) return result;

      const newUUID = v4();
      dispatch(
        SoftRefreshSlice.actions.refreshId({
          name,
          id: newUUID,
        })
      );
      return newUUID;
    },
    [softRefresh, dispatch]
  );

  return {
    id: softRefresh.globalId,
    getByName,
    refreshId,
  };
};
