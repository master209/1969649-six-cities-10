type CommentFormRatingItemProps = {
  rating: number;
  title: string;
  form: any,
  setForm: (form: any) => void,
};

/* «Один контрол рейтинга формы комментариев» */
function CommentFormRatingItem({rating, title, form, setForm}: CommentFormRatingItemProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-rating`}
        type="radio"
        checked={form.rating === rating}
        onChange={() => {
          setForm({...form, rating});
        }}
      />
      <label htmlFor={`${rating}-rating`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default CommentFormRatingItem;
