import {useEffect} from 'react';

import {setSort} from '../../store/main-process/main-process';

import {useAppDispatch} from '../index';
import useAppSelectors from '../app-selectors';

const useSetSort = () => {
  const dispatch = useAppDispatch();
  const {offers} = useAppSelectors();

  useEffect(() => {
    dispatch(setSort(null));
  }, [offers]);
};

export default useSetSort;
