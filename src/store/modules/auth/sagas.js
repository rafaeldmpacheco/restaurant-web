import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import history from "../../../services/history";
import { loginSuccess, signFailure } from "./actions";

export function* login({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

    if (response.username === username && response.password === password) {
      yield put(loginSuccess());

      history.push("/dishes");
    } else {
      alert("Houve um problema com o cadastro, verifique suas credenciais!");
    }
  } catch (err) {
    yield put(signFailure());
    alert("Houve um problema com o login, verifique suas credenciais!");
  }
}

export function* signUp({ payload }) {
  try {
    if (payload.password === payload.confirmPassword) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      history.push("/");
    } else {
      alert("As senhas informadas precisam ser iguais!");
    }
  } catch (err) {
    alert("Houve um problema com o cadastro, verifique suas credenciais!");
    yield put(signFailure());
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
