import {useState, FormEvent, ChangeEvent} from 'react';
import {REVIEW_LENGTH} from '../../const';

function ReviewForm(): JSX.Element {
  const [form, setForm] = useState({stars:0, review:''});

  const handleSubmit = () => {
    /* eslint-disable-next-line no-console */
    console.log('ReviewForm: ', form);
  };

  // To submit review please make sure to set star rating and describe your stay with at least 10 characters
  const isFormValid = () => (
    !!(form.stars || form.review)
      && form.stars > 0
      && form.review.length >= REVIEW_LENGTH
  );

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={form.stars === 5}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, stars: 5});
          }}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={form.stars === 4}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, stars: 4});
          }}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={form.stars === 3}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, stars: 3});
          }}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={form.stars === 2}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, stars: 2});
          }}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={form.stars === 1}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, stars: 1});
          }}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setForm({...form, review: target.value});
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid()}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
