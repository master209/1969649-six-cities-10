type FeaturesInsideProps = {
  offerInsideItem: string;
};

function FeaturesInside({offerInsideItem}: FeaturesInsideProps): JSX.Element {
  return (
    <li className="property__inside-offerInsideItem">
      {offerInsideItem}
    </li>
  );
}

export default FeaturesInside;
