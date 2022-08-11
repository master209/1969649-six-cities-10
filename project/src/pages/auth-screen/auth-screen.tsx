import {FormEvent, useRef} from 'react';
import {Link} from 'react-router-dom';

import Layout from '../../components/layout/layout';

import {fetchLogin} from '../../store/api-actions';

import {useAppDispatch} from '../../hooks';

import {AppRoute} from '../../const';

const CITY = 'Amsterdam';

type AuthScreenProps = {
  onChangeCity: (city: string) => void;
};

function AuthScreen({onChangeCity}: AuthScreenProps): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(fetchLogin({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Layout>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="email">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email"
                    id="email"
                    name="email"
                    data-testid="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    id="password"
                    name="password"
                    data-testid="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link
                  className="locations__item-link"
                  to={AppRoute.Main}
                  onClick={() => onChangeCity(CITY)}
                >
                  <span>{CITY}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default AuthScreen;
