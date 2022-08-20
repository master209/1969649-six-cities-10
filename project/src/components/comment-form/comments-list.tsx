import {CommentItem} from './index';

import {Comments} from '../../types/offers';

import {Comment} from '../../const';

type CommentListProps = {
  comments: Comments;
};

/* «Список отзывов» */
function CommentsList({comments}: CommentListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment, idx) => (
        idx < Comment.MaxCount
          ? <CommentItem key={comment.id} comment={comment}/>
          : null
      ))}
    </ul>
  );
}

export default CommentsList;
