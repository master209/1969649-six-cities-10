import {Offer} from '../../../types/offers';

type HostProps = {
  offer: Offer;
}

/* Информация об арендодателе */
function Host({offer}: HostProps): JSX.Element {
  const {description, host} = offer;
  const {avatarUrl, name: userName, isPro} = host;

  const hostProClass = isPro ? 'property__avatar-wrapper--pro' : '';

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${hostProClass} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">{userName}</span>
        {isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Host;
