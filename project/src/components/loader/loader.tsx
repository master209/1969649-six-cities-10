import {useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';

import './loader.css';

function Loader(): JSX.Element {
  const el = useMemo(() => document.createElement('div'), []);
  el.setAttribute('class', 'loader-root');

  useEffect(() => {
    document.body.prepend(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(<p className="app-loader">Loading...</p>, el);
}

export default Loader;
