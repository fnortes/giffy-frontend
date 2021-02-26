import useUser from "hooks/useUser";
import React from "react";
import { useLocation } from "wouter";
import "./Fav.css";

export default function Fav({ id }) {

  const { isLogged, addFav, favs } = useUser();
  const [, pushLocation] = useLocation();

  const isFaved = favs.some(favId => favId === id);

  const handleOnClick = () => {

    if (!isLogged) return pushLocation('/login');

    addFav({ id });

  };

  const [label, emoji] = isFaved
    ? [
      'Remove Gif from favourites',
      '💔'
    ]
    : [
      'Add gif to favourites',
      '❤️'
    ];

  return (
    <button className="gf-Fav" onClick={handleOnClick}>
      <span role="img" arial-label={label}>{emoji}</span>
    </button>
  );

}