import {Comment} from '../../../types/offers';

import {getStarsClass, getFormattedDate} from '../../../utils';

type CommentProps = {
  comment: Comment;
};

/* «Отзыв» */
function CommentItem({comment}: CommentProps): JSX.Element {
  const {user, date, rating} = comment;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item" data-testid="comment-item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={getStarsClass(+rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getFormattedDate(date)}</time>
      </div>
    </li>
  );
}

export default CommentItem;
