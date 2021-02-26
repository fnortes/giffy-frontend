import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    let observer = null;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    // Para navegadores que no soportan el IntersectionObserver, 
    // importamos el polyfill que nos da esta funcionalidad.
    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      });

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}