import React from "react";
import { useLocation } from "wouter";
import Button from "components/Button";
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {

  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating
  });

  const [, pushLocation] = useLocation();

  const handleChange = event => {
    updateKeyword(event.target.value);
  };

  const handleChangeRating = event => {
    updateRating(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    pushLocation(`/search/${keyword}/${rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Buscar un gif aquí ..."
        onChange={handleChange} type="text" value={keyword} />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
      </select><br /><br />
      <Button>Buscar</Button>
    </form>
  );
}

export default React.memo(SearchForm);