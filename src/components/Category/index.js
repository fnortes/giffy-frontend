import React, { useEffect, useState } from "react";
import { CategoryTitle, CategoryList, CategoryListItem, CategoryLink } from "./styles";
import getTrendingTerms from 'services/getTrendingTerms';

export default function Category({ name, options = [] }) {

  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <section>
    <CategoryTitle>{name}</CategoryTitle>
    <CategoryList>
      {trends.map((singleOption, index) => (
        <CategoryListItem key={singleOption} index={index}>
          <CategoryLink to={`/search/${singleOption}`}>
            {singleOption}
          </CategoryLink>
        </CategoryListItem>
      ))}
    </CategoryList>
  </section>

}