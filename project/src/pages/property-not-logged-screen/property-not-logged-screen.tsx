import Property from '../../pages/property-screen/property-screen';

type PropertyProps = {
  isGuest: boolean,
}

function PropertyNotLogged({isGuest}: PropertyProps): JSX.Element {
  return (
    <Property isGuest={isGuest} />
  );
}

export default PropertyNotLogged;
