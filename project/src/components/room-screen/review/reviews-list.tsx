import {ReviewItem} from './';

import {Reviews} from '../../../types/offers';

type ReviewListProps = {
  reviews: Reviews;
};

// «Список отзывов»
function ReviewsList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
