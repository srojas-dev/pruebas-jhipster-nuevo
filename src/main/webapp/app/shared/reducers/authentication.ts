import axios, { AxiosResponse } from 'axios';
<<<<<<< Updated upstream
import { Storage } from 'react-jhipster';
=======
>>>>>>> Stashed changes
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { serializeAxiosError } from './reducer.utils';

import { AppThunk } from 'app/config/store';


<<<<<<< Updated upstream
const AUTH_TOKEN_KEY = 'jhi-authenticationToken';
=======
>>>>>>> Stashed changes

export const initialState = {
  loading: false,
  isAuthenticated: false,
<<<<<<< Updated upstream
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  showModalLogin: false,
=======
>>>>>>> Stashed changes
  account: {} as any,
  errorMessage: null as unknown as string, // Errors returned from server side
  redirectMessage: null as unknown as string,
  sessionHasBeenFetched: false,
  logoutUrl: null as unknown as string,
};

export type AuthenticationState =  Readonly<typeof initialState>;

// Actions

export const getSession = (): AppThunk =>  (dispatch, getState) => {
  dispatch(getAccount());
};

export const getAccount = createAsyncThunk('authentication/get_account', async () => axios.get<any>('api/account'), {
  serializeError: serializeAxiosError,
});

<<<<<<< Updated upstream
interface IAuthParams {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export const authenticate = createAsyncThunk('authentication/login', async (auth: IAuthParams) => axios.post<any>('api/authenticate', auth), {
  serializeError: serializeAxiosError,
});

export const login: (username: string, password: string, rememberMe?: boolean) => AppThunk =
  (username, password, rememberMe = false) =>
  async dispatch => {
    const result = await dispatch(authenticate({ username, password, rememberMe }));
    const response = result.payload as AxiosResponse;
    const bearerToken = response?.headers?.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
      const jwt = bearerToken.slice(7, bearerToken.length);
      if (rememberMe) {
        Storage.local.set(AUTH_TOKEN_KEY, jwt);
      } else {
        Storage.session.set(AUTH_TOKEN_KEY, jwt);
      }
    }
    dispatch(getSession());
  };

export const clearAuthToken = () => {
  if (Storage.local.get(AUTH_TOKEN_KEY)) {
    Storage.local.remove(AUTH_TOKEN_KEY);
  }
  if (Storage.session.get(AUTH_TOKEN_KEY)) {
    Storage.session.remove(AUTH_TOKEN_KEY);
  }
};

export const logout: () => AppThunk = () => dispatch => {
  clearAuthToken();
  dispatch(logoutSession());
};

export const clearAuthentication = messageKey => dispatch => {
  clearAuthToken();
=======

export const logoutServer = createAsyncThunk('authentication/logout', async () => axios.post<any>('api/logout', {}), {
  serializeError: serializeAxiosError,
});

export const logout: () => AppThunk = () => async dispatch => {
  await dispatch(logoutServer());
  // fetch new csrf token
  dispatch(getSession());
};

export const clearAuthentication = messageKey => dispatch => {
>>>>>>> Stashed changes
  dispatch(authError(messageKey));
  dispatch(clearAuth());
};

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialState as AuthenticationState,
  reducers: {
<<<<<<< Updated upstream
    logoutSession() {
      return {
        ...initialState,
        showModalLogin: true,
      };
    },
    authError(state, action) {
      return {
        ...state,
        showModalLogin: true,
=======
    authError(state, action) {
      return {
        ...state,
>>>>>>> Stashed changes
        redirectMessage: action.payload
      };
    },
    clearAuth(state) {
      return {
        ...state,
        loading: false,
<<<<<<< Updated upstream
        showModalLogin: true,
=======
>>>>>>> Stashed changes
        isAuthenticated: false
      };
    },
  },
  extraReducers(builder) {
    builder
<<<<<<< Updated upstream
      .addCase(authenticate.rejected, (state, action) => ({
        ...initialState,
        errorMessage: action.error.message,
        showModalLogin: true,
        loginError: true,
      }))
      .addCase(authenticate.fulfilled, state => ({
        ...state,
        loading: false,
        loginError: false,
        showModalLogin: false,
        loginSuccess: true,
      }))
=======
>>>>>>> Stashed changes
      .addCase(getAccount.rejected, (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        sessionHasBeenFetched: true,
<<<<<<< Updated upstream
        showModalLogin: true,
=======
>>>>>>> Stashed changes
        errorMessage: action.error.message,
      }))
      .addCase(getAccount.fulfilled, (state, action) => {
        const isAuthenticated = action.payload && action.payload.data && action.payload.data.activated;
        return {
          ...state,
          isAuthenticated,
          loading: false,
          sessionHasBeenFetched: true,
          account: action.payload.data,
        };
      })
<<<<<<< Updated upstream
      .addCase(authenticate.pending, state => {
        state.loading = true;
      })
=======
      .addCase(logoutServer.fulfilled, (state, action) => ({
        ...initialState,
        logoutUrl: action.payload.data.logoutUrl
      }))
>>>>>>> Stashed changes
      .addCase(getAccount.pending, state => {
        state.loading = true;
      });
  },
});

<<<<<<< Updated upstream
export const { logoutSession, authError, clearAuth } = AuthenticationSlice.actions;
=======
export const {  authError, clearAuth } = AuthenticationSlice.actions;
>>>>>>> Stashed changes

// Reducer
export default AuthenticationSlice.reducer;


