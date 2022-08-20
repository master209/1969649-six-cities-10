import {Link} from 'react-router-dom';

import {fetchLogout} from '../../../store/api-actions';
import {resetFavorites} from '../../../store/favorite-data/favorite-data';

import {useAppDispatch} from '../../../hooks';
import useAppSelectors from '../../../hooks/app-selectors';

import {AppRoute} from '../../../const';

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const {favorites, email} = useAppSelectors();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          data-testid="header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(resetFavorites());
            dispatch(fetchLogout());
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
