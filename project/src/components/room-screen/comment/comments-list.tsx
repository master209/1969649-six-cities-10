import {CommentItem} from './';

import {Comments} from '../../../types/offers';

type CommentListProps = {
  comments: Comments;
};

/* «Список отзывов» */
function CommentsList({comments}: CommentListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}

export default CommentsList;
