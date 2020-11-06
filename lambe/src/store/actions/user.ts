import Axios from 'axios';
import { LOADING_USER, USER_LOADED, USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';
import { setMessage } from './message';

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'AIzaSyAvKz6Mq5QMHFtTGa5llTMP14rg-c1D0HU';

export const userLogged = (user: any) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export const createUser = (user: any) => {
  return (dispatch: any) => {
    dispatch(loadingUser());

    Axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    })
      .then((res) => {
        if (res.data.localId) {
          Axios.put(`users/${res.data.localId}.json`, {
            name: user.name,
          })
            .then((_) => {
              dispatch(login(user));
            })
            .catch((_) =>
              dispatch(
                setMessage({
                  title: 'Erro',
                  text: 'Ocorreu um erro inesperado!',
                }),
              ),
            );
        }
      })
      .catch((_) =>
        dispatch(
          setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado!',
          }),
        ),
      );
  };
};

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

export const login = (user: any) => {
  return (dispatch: any) => {
    dispatch(loadingUser());

    Axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    })
      .then((res) => {
        if (res.data.localId) {
          user.token = res.data.idToken;
          Axios.get(`users/${res.data.localId}.json`)
            .then((res) => {
              delete user.password;
              user.name = res.data.name;
              dispatch(userLogged(user));
              dispatch(userLoaded());
            })
            .catch((_) =>
              dispatch(
                setMessage({
                  title: 'Erro',
                  text: 'Ocorreu um erro inesperado!',
                }),
              ),
            );
        }
      })
      .catch((_) =>
        dispatch(
          setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado!',
          }),
        ),
      );
  };
};
