type OfferInsideItemProps = {
  inside: string;
};

function OfferInsideItem({inside}: OfferInsideItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {inside}
    </li>
  );
}

export default OfferInsideItem;
