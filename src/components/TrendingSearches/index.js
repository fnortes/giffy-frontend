import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';

const Category = React.lazy(
  () => import('components/Category')
);

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({
    distance: '200px'
  });

  return <div ref={fromRef}>
    <Suspense fallback={'Estoy cargando'}>
      {isNearScreen ? <Category /> : null}
    </Suspense>
  </div>
}