import React from 'react';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import LazyTrending from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <LazyTrending />
    </>
  );
}