import {FormEvent, useRef, MutableRefObject} from 'react';
import {Link} from 'react-router-dom';

import Layout from '../../components/layout/layout';

import {fetchLogin} from '../../store/api-actions';

import {useAppDispatch} from '../../hooks';

import {capitalize} from '../../utils';

import {AppRoute, cities} from '../../const';

const RANDOM_CITY = cities[Math.floor(Math.random() * cities.length)];

type AuthScreenProps = {
  onChangeCity: (city: string) => void;
};

type LoginInputProps = {
  _ref: MutableRefObject<HTMLInputElement | null>;
  name: string;
  label: string;
};

function AuthScreen({onChangeCity}: AuthScreenProps): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(fetchLogin({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const Input = ({_ref, name, label}: LoginInputProps) => (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden" htmlFor={name}>{label}</label>
      <input
        ref={_ref}
        className="login__input form__input"
        type={name}
        id={name}
        name={name}
        data-testid={name}
        placeholder={capitalize(name)}
        required
      />
    </div>
  );

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
                <Input _ref={loginRef} name="email" label="E-mail" />
                <Input _ref={passwordRef} name="password" label="Password" />
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
                  onClick={() => onChangeCity(RANDOM_CITY)}
                >
                  <span>{RANDOM_CITY}</span>
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
