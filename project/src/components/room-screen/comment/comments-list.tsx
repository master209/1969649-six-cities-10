import CommentItem from './comment-item';

import {Comments} from '../../../types/offers';

import {MAX_COMMENT_COUNT} from '../../../const';

type CommentListProps = {
  comments: Comments;
};

/* «Список отзывов» */
function CommentsList({comments}: CommentListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment, idx) => (
        idx < MAX_COMMENT_COUNT
          ? <CommentItem key={comment.id} comment={comment}/>
          : null
      ))}
    </ul>
  );
}

export default CommentsList;
