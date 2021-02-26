import React, { useEffect, useRef, useCallback } from 'react';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';

export default function SearchResults({ params }) {
  const { keyword, rating = 'g' } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const visorRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : visorRef,
    once: false
  });

  const title = gifs
    ? `${gifs.length} resultados de ${keyword}`
    : loading ? 'Cargando...' : '';

  // El debounce te permite llamar a una funcion una sola vez en un 
  // intervalo de tiempo (200ms en este caso).
  // Con el useCallback se consigue que sólo se defina la función la 
  // primera vez que se renderiza el componente.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1)
    , 200
  ), [setPage]);

  useEffect(() => {
    if (isNearScreen) {
      handleNextPage();
    }
  }, [isNearScreen, handleNextPage]);

  return <>
    {loading
      ? <i>Cargando ...</i>
      : <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title} />
        </Helmet>
        <SearchForm initialKeyword={keyword} initialRating={rating} />
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={visorRef}></div>
      </>}
  </>;
}