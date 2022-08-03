import {Link} from 'react-router-dom';

import {logoutAction} from '../../store/api-actions';
import {getFavorites} from '../../store/favorite-data/selectors';

import {useAppDispatch, useAppSelector} from '../../hooks';

import {AppRoute} from '../../const';

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);

  return (
    <ul className="header__nav-list">

      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>

      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to={AppRoute.Main}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>

    </ul>
  );
}

export default SignOut;
