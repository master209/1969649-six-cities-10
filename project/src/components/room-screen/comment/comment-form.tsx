import {useState, useRef, FormEvent, ChangeEvent} from 'react';

import CommentFormRatingItem from './comment-form-rating-item';

import {fetchCreateComment} from '../../../store/api-actions';

import {useAppDispatch} from '../../../hooks';

import {CommentFormData} from '../../../types/offers';

import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../../../const';

import './style.css';

type CommentFormProp = {
  offerId: number;
};

const INITIAL_STATE = {comment:'', rating:0};

const ratings = [
  {val: 5, title: 'perfect'},
  {val: 4, title: 'good'},
  {val: 3, title: 'not bad'},
  {val: 2, title: 'badly'},
  {val: 1, title: 'terribly'},
];

/* «/Форма комментариев» */
function CommentForm({offerId} : CommentFormProp): JSX.Element {
  const [form, setForm] = useState<CommentFormData>(INITIAL_STATE);
  const commentFormRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(fetchCreateComment({...form, offerId}));
    setForm(INITIAL_STATE);
    commentFormRef.current?.reset();
  };

  const isFormValid = () => (
    form.rating > 0
    && form.comment.length >= MIN_COMMENT_LENGTH
    && form.comment.length <= MAX_COMMENT_LENGTH
  );

  return (
    <form
      ref={commentFormRef}
      className="reviews__form form"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map(({val, title}) => (
          <CommentFormRatingItem
            key={val.toString()}
            value={val}
            title={title}
            form={form}
            setForm={setForm}
          />
        ))}
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
        <p className={`reviews__help ${isFormValid() ? '' : 'error'}`}>
          To submit review please make sure to set <span className="reviews__star">rating</span>&nbsp;
          and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>&nbsp;
          and no more than <b className="reviews__text-amount">{MAX_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
