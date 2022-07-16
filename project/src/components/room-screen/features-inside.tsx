type FeaturesInsideProps = {
  item: string;
};

function FeaturesInside({item}: FeaturesInsideProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {item}
    </li>
  );
}

export default FeaturesInside;
