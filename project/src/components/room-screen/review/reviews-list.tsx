import {ReviewItem} from './';

import {Reviews} from '../../../types/offers';

type ReviewListProps = {
  reviews: Reviews;
  // handleMouseOver: (id: string) => void;
};

// «Список отзывов»
function ReviewsList({reviews/*, handleMouseOver*/}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          // handleCardMouseOver={() => handleMouseOver(review.id)}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
