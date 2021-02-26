import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import getTrendingTerms from 'services/getTrendingTerms';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <ul>
      {trends.map(trend => (
        <li key={trend}>
          <Link to={`/search/${trend}`}>{trend}</Link>
        </li>
      ))}
    </ul>
  );
}