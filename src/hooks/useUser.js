import { useCallback, useContext, useState } from "react";
import Context from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

export default function useUser() {

  const { jwt, setJwt, favs, setFavs } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(({ username, password }) => {

    setState({ loading: true, error: false });

    loginService({ username, password })
      .then(jwt => {

        setState({ loading: false, error: false });
        window.sessionStorage.setItem('jwt', jwt);
        setJwt(jwt);

      })
      .catch(err => {

        setState({ loading: false, error: true });
        window.sessionStorage.removeItem('jwt');
        console.error(err);

      });

  }, [setJwt]);

  const logout = useCallback(() => {

    window.sessionStorage.removeItem('jwt');
    setJwt(null);

  }, [setJwt]);

  const addFav = useCallback(({ id }) => {

    addFavService({ id, jwt })
      .then(setFavs)
      .catch(err => {
        console.error(err);
      });

  }, [jwt, setFavs]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    addFav,
    favs
  };

}