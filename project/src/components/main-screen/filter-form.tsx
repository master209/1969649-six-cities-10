import {clickSort, changeSort} from '../../store/action';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {offerSorts} from '../../const';

function SortingForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const {sortBy, isSortListCollapsed} = useAppSelector((state) => state);

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
      <ul className={`places__options places__options--custom places__options${!isSortListCollapsed && '--opened'}`}>
        {offerSorts.map((sort) => (
          <li
            key={sort}
            className={`places__option places__option${sortBy === sort && '--active'}`}
            tabIndex={0}
            onClick={() => dispatch(changeSort({sort}))}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
