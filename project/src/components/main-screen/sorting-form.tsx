import {clickSort, setSort} from '../../store/main-process/main-process';

import {useAppDispatch} from '../../hooks';
import useAppSelectors from '../../hooks/use-app-selectors';

import {offerSorts} from '../../const';

function SortingForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {sortBy, isSortListCollapsed} = useAppSelectors();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => dispatch(clickSort())}
      >
        {sortBy}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isSortListCollapsed ? '' : ' places__options--opened'}`}>
        {offerSorts.map((sort) => (
          <li
            key={sort}
            className={`places__option${sortBy === sort ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => dispatch(setSort(sort))}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
