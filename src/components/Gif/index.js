import Fav from 'components/Fav';
import React from 'react';
import { Link } from 'wouter';
import './Gif.css';

function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <div className="Gif-button">
        <Fav id={id} />
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  // Sólo cuando el id cambie, se desea que se reenderice.
  return prevProps.id === nextProps.id;
});