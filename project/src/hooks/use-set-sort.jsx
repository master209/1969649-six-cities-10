import {useEffect} from 'react';

import {setSort} from '../store/main-process/main-process';
import {getOffers} from '../store/main-process/selectors';

import {useAppSelector, useAppDispatch} from '.';

const useSetSort = () => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);

  useEffect(() => {
    dispatch(setSort(null));
  }, [offers]);
};

export default useSetSort;
