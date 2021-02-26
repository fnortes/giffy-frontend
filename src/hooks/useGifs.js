import { useEffect, useState, useContext } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null, rating: 'g' }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keywordToUse);
      });
  }, [keyword, rating, keywordToUse, setGifs]);

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setLoadingNextPage(true);
      getGifs({ keyword: keywordToUse, rating, page })
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false);
        });
    }
  }, [page, keywordToUse, setGifs, rating]);

  return { loading, loadingNextPage, gifs, setPage };
}