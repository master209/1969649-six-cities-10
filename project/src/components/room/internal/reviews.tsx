import {CommentForm, CommentsList} from '../../comment';

import {Offer, Comments} from '../../../types/offers';

type ReviewsProps = {
  offer: Offer;
  comments: Comments;
  isAuthorized: boolean;
}

/* Отзывы (комментарии) */
function Reviews({offer, comments, isAuthorized}: ReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <CommentsList
        comments={comments}
      />
      {isAuthorized && offer && <CommentForm offerId={offer.id} />}
    </section>
  );
}

export default Reviews;
