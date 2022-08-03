type PremiumProps = {
  containerClass?: string;
};

function Premium({containerClass = 'place-card__mark'}: PremiumProps): JSX.Element {
  return (
    <div className={containerClass}>
      <span>Premium</span>
    </div>
  );
}

export default Premium;
