import PlaceCard from '../../components/main-screen/place-card';
import Locations from '../../components/main-screen/locations';

type MainScreenProps = {
  placesFound: number;
}

function MainScreen({placesFound}: MainScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>

            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>

            <div className="cities__places-list places__list tabs__content">
              <PlaceCard
                imgSrc={'img/apartment-01.jpg'}
                isPremium
                description={{
                  price: '120',
                  isBookmarkActive: false,
                  rating: '80%',
                  name: 'Beautiful & luxurious apartment at great location',
                  type: 'Apartment',
                }}
              />

              <PlaceCard
                imgSrc={'img/room.jpg'}
                description={{
                  price: '80',
                  isBookmarkActive: true,
                  rating: '80%',
                  name: 'Wood and stone place',
                  type: 'Private room',
                }}
              />

              <PlaceCard
                imgSrc={'img/apartment-02.jpg'}
                description={{
                  price: '132',
                  isBookmarkActive: false,
                  rating: '80%',
                  name: 'Canal View Prinsengracht',
                  type: 'Apartment',
                }}
              />

              <PlaceCard
                imgSrc={'img/apartment-03.jpg'}
                isPremium
                description={{
                  price: '180',
                  isBookmarkActive: false,
                  rating: '100%',
                  name: 'Nice, cozy, warm big bed apartment',
                  type: 'Apartment',
                }}
              />

              <PlaceCard
                imgSrc={'img/room.jpg'}
                description={{
                  price: '80',
                  isBookmarkActive: true,
                  rating: '80%',
                  name: 'Wood and stone place',
                  type: 'Apartment',
                }}
              />
            </div>

          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
