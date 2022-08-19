import {CommentFormData} from '../../types/offers';

type CommentFormRatingItemProps = {
  value: number;
  title: string;
  form: CommentFormData,
  setForm: (form: CommentFormData) => void,
};

/* «Один контрол рейтинга формы комментариев» */
function CommentFormRatingItem(props: CommentFormRatingItemProps): JSX.Element {
  const {value, title, form, setForm} = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-rating`}
        type="radio"
        checked={form.rating === value}
        onChange={() => {
          setForm({...form, rating:value});
        }}
      />
      <label htmlFor={`${value}-rating`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default CommentFormRatingItem;
