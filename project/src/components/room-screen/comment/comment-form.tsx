import {useState, useRef, FormEvent, ChangeEvent} from 'react';

import {fetchCreateCommentAction} from '../../../store/api-actions';

import {useAppDispatch} from '../../../hooks';

import {MIN_COMMENT_LENGTH} from '../../../const';

type CommentFormProp = {
  offerId: number;
};

// «/Форма отзыва»
function CommentForm({offerId} : CommentFormProp): JSX.Element {
  const [form, setForm] = useState({comment:'', rating:0});
  const commentFormRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const handleFormSubmit = () => {
    dispatch(fetchCreateCommentAction({...form, offerId}));
    setForm({rating:0, comment:''});
    commentFormRef.current?.reset();
  };

  const isFormValid = () => (
    form.rating > 0 && form.comment.length >= MIN_COMMENT_LENGTH
  );

  return (
    <form
      ref={commentFormRef}
      className="reviews__form form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleFormSubmit();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-rating"
          type="radio"
          checked={form.rating === 5}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, rating: 5});
          }}
        />
        <label htmlFor="5-rating" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-rating"
          type="radio"
          checked={form.rating === 4}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, rating: 4});
          }}
        />
        <label htmlFor="4-rating" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-rating"
          type="radio"
          checked={form.rating === 3}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, rating: 3});
          }}
        />
        <label htmlFor="3-rating" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-rating"
          type="radio"
          checked={form.rating === 2}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, rating: 2});
          }}
        />
        <label htmlFor="2-rating" className="reviews__rating-label form__rating-label" title="badly">
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
          checked={form.rating === 1}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setForm({...form, rating: 1});
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
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setForm({...form, comment: target.value});
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid()}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
