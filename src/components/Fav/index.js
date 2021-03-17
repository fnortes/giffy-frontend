import Login from "components/Login";
import Modal from "components/Modal";
import useUser from "hooks/useUser";
import React, { useState } from "react";
import "./Fav.css";

export default function Fav({ id }) {

  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some(favId => favId === id);

  const handleOnClick = () => {

    if (!isLogged) return setShowModal(true);

    addFav({ id });

  };

  const handleOnClose = () => {

    setShowModal(false);

  };

  const handleOnLogin = () => {

    setShowModal(false);

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
    <>
      <button className="gf-Fav" onClick={handleOnClick}>
        <span role="img" arial-label={label}>{emoji}</span>
      </button>
      {showModal && <Modal onClose={handleOnClose}>
        <Login onLogin={handleOnLogin} />
      </Modal>}
    </>
  );

}