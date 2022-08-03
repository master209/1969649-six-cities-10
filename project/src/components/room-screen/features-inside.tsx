type OfferInsideItemProps = {
  label: string;
};

function OfferInsideItem({label}: OfferInsideItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {label}
    </li>
  );
}

export default OfferInsideItem;
