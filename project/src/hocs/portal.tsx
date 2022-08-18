import {useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
  component: () => JSX.Element;
  nameOfClass: string;
};

const Portal = ({ component: ComponentPortal, nameOfClass, ...rest }: PortalProps) => {
  const el = useMemo(() => document.createElement('div'), []);
  el.setAttribute('class', nameOfClass);

  useEffect(() => {
    document.body.prepend(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(<ComponentPortal {...rest} />, el);
};

export default Portal;
