import thunk from 'redux-thunk';
import axios from 'axios';
import sinon from 'sinon';
<<<<<<< Updated upstream
import { Storage } from 'react-jhipster';
=======
>>>>>>> Stashed changes
import configureStore from 'redux-mock-store';

import authentication, {
  getSession,
  getAccount,
<<<<<<< Updated upstream
  authenticate,
  login,

  clearAuthentication,
  logout,
  logoutSession,
  clearAuthToken,
=======

  logoutServer,
  clearAuthentication,
  logout,
>>>>>>> Stashed changes
  authError,
  clearAuth,
  initialState,
} from 'app/shared/reducers/authentication';

describe('Authentication reducer tests', () => {
  function isAccountEmpty(state): boolean {
    return Object.keys(state.account).length === 0;
  }

  describe('Common tests', () => {
    it('should return the initial state', () => {
      const toTest = authentication(undefined, { type: '' });
      expect(toTest).toMatchObject({
        loading: false,
        isAuthenticated: false,
        errorMessage: null, // Errors returned from server side
<<<<<<< Updated upstream
        loginSuccess: false,
        loginError: false, // Errors returned from server side
        showModalLogin: false,
=======
>>>>>>> Stashed changes
        redirectMessage: null
      });
      expect(isAccountEmpty(toTest));
    });
  });

<<<<<<< Updated upstream
  describe('Requests', () => {
    it('should detect a request', () => {
      expect(authentication(undefined, { type: authenticate.pending.type })).toMatchObject({
        loading: true
      });
      expect(authentication(undefined, { type: getAccount.pending.type })).toMatchObject({
        loading: true
      });
    });
  });

  describe('Success', () => {
    it('should detect a success on login', () => {
      const toTest = authentication(undefined, { type: authenticate.fulfilled.type });
      expect(toTest).toMatchObject({
        loading: false,
        loginError: false,
        loginSuccess: true,
        showModalLogin: false
      });
    });
=======

  describe('Success', () => {
>>>>>>> Stashed changes

    it('should detect a success on get session and be authenticated', () => {
      const payload = { data: { activated: true } };
      const toTest = authentication(undefined, { type: getAccount.fulfilled.type, payload });
      expect(toTest).toMatchObject({
        isAuthenticated: true,
        loading: false,
        account: payload.data
      });
    });

    it('should detect a success on get session and not be authenticated', () => {
      const payload = { data: { activated: false } };
      const toTest = authentication(undefined, { type: getAccount.fulfilled.type, payload });
      expect(toTest).toMatchObject({
        isAuthenticated: false,
        loading: false,
        account: payload.data
      });
    });
  });

  describe('Failure', () => {
<<<<<<< Updated upstream
    it('should detect a failure on login', () => {
      const error = { message: 'Something happened.' };
      const toTest = authentication(undefined, { type: authenticate.rejected.type, error });

      expect(toTest).toMatchObject({
        errorMessage: error.message,
        showModalLogin: true,
        loginError: true
      });
      expect(isAccountEmpty(toTest));
    });
=======
>>>>>>> Stashed changes

    it('should detect a failure', () => {
      const error = { message: 'Something happened.' };
      const toTest = authentication(undefined, { type: getAccount.rejected.type, error });

      expect(toTest).toMatchObject({
        loading: false,
        isAuthenticated: false,
<<<<<<< Updated upstream
        showModalLogin: true,
=======
>>>>>>> Stashed changes
        errorMessage: error.message
      });
      expect(isAccountEmpty(toTest));
    });
  });

  describe('Other cases', () => {
    it('should properly reset the current state when a logout is requested', () => {
<<<<<<< Updated upstream
      const toTest = authentication(undefined,
      logoutSession()
=======
const payload = { data: { logoutUrl: 'http://localhost:8080/logout' } };      const toTest = authentication(undefined,
      { type: logoutServer.fulfilled.type, payload }
>>>>>>> Stashed changes
      );
      expect(toTest).toMatchObject({
        loading: false,
        isAuthenticated: false,
<<<<<<< Updated upstream
        loginSuccess: false,
        loginError: false,
        showModalLogin: true,
=======
>>>>>>> Stashed changes
        errorMessage: null,
        redirectMessage: null
      });
      expect(isAccountEmpty(toTest));
    });

    it('should properly define an error message and change the current state to display the login modal', () => {
      const message = 'redirect me please';
      const toTest = authentication(undefined, authError(message));
      expect(toTest).toMatchObject({
        loading: false,
        isAuthenticated: false,
<<<<<<< Updated upstream
        loginSuccess: false,
        loginError: false,
        showModalLogin: true,
=======
>>>>>>> Stashed changes
        errorMessage: null,
        redirectMessage: message
      });
      expect(isAccountEmpty(toTest));
    });

    it('should clear authentication', () => {
      const toTest = authentication({ ...initialState, isAuthenticated: true }, clearAuth());
      expect(toTest).toMatchObject({
        loading: false,
<<<<<<< Updated upstream
        showModalLogin: true,
=======
>>>>>>> Stashed changes
        isAuthenticated: false
      });
    });
  });

  describe('Actions', () => {
    let store;

    const resolvedObject = { value: 'whatever' };
    beforeEach(() => {
      const mockStore = configureStore([thunk]);
      store = mockStore({ authentication: { account: { } } });
      axios.get = sinon.stub().returns(Promise.resolve(resolvedObject));
    });

    it('dispatches GET_SESSION_PENDING and GET_SESSION_FULFILLED actions', async () => {
      const expectedActions = [
        {
          type: getAccount.pending.type
        },
      ];
      await store.dispatch(getSession());
      expect(store.getActions()).toMatchObject(expectedActions);
    });

    it('dispatches LOGOUT actions', async () => {
<<<<<<< Updated upstream
      const expectedActions = [
        logoutSession(),
      ];
      await store.dispatch(logout());
      expect(store.getActions()[0]).toMatchObject(expectedActions[0]);
=======
      axios.post = sinon.stub().returns(Promise.resolve({}));
      const expectedActions = [
        {
          type: logoutServer.pending.type
        },
        {
         type: logoutServer.fulfilled.type,
         payload: {},
        },
        {
         type: getAccount.pending.type,
        },
      ];
      await store.dispatch(logout());
      expect(store.getActions()[0]).toMatchObject(expectedActions[0]);
      expect(store.getActions()[1]).toMatchObject(expectedActions[1]);
      expect(store.getActions()[2]).toMatchObject(expectedActions[2]);
>>>>>>> Stashed changes
    });

    it('dispatches CLEAR_AUTH actions', async () => {
      const expectedActions = [authError('message'), clearAuth()];
      await store.dispatch(clearAuthentication('message'));
      expect(store.getActions()).toEqual(expectedActions);
    });

<<<<<<< Updated upstream
    it('dispatches LOGIN, GET_SESSION and SET_LOCALE success and request actions', async () => {
      const loginResponse = { headers: { authorization: 'auth' } };
      axios.post = sinon.stub().returns(Promise.resolve(loginResponse));
      const expectedActions = [
        {
          type: authenticate.pending.type
        },
        {
          type: authenticate.fulfilled.type,
          payload: loginResponse
        },
        {
          type: getAccount.pending.type
        },
      ];
      await store.dispatch(login('test', 'test'));
      expect(store.getActions()[0]).toMatchObject(expectedActions[0]);
      expect(store.getActions()[1]).toMatchObject(expectedActions[1]);
      expect(store.getActions()[2]).toMatchObject(expectedActions[2]);
    });
  });
  describe('clearAuthToken', () => {
    let store;
    beforeEach(() => {
      const mockStore = configureStore([thunk]);
      store = mockStore({ authentication: { account: { langKey: 'en' } } });
    });
    it('clears the session token on clearAuthToken', async () => {
      const AUTH_TOKEN_KEY = 'jhi-authenticationToken';
      const loginResponse = { headers: { authorization: 'Bearer TestToken' } };
      axios.post = sinon.stub().returns(Promise.resolve(loginResponse));

      await store.dispatch(login('test', 'test'));
      expect(Storage.session.get(AUTH_TOKEN_KEY)).toBe('TestToken');
      expect(Storage.local.get(AUTH_TOKEN_KEY)).toBe(undefined);
      clearAuthToken()
      expect(Storage.session.get(AUTH_TOKEN_KEY)).toBe(undefined);
      expect(Storage.local.get(AUTH_TOKEN_KEY)).toBe(undefined);
    });
    it('clears the local storage token on clearAuthToken', async () => {
      const AUTH_TOKEN_KEY = 'jhi-authenticationToken';
      const loginResponse = { headers: { authorization: 'Bearer TestToken' } };
      axios.post = sinon.stub().returns(Promise.resolve(loginResponse));

      await store.dispatch(login('user', 'user', true));
      expect(Storage.session.get(AUTH_TOKEN_KEY)).toBe(undefined);
      expect(Storage.local.get(AUTH_TOKEN_KEY)).toBe('TestToken');
      clearAuthToken()
      expect(Storage.session.get(AUTH_TOKEN_KEY)).toBe(undefined);
      expect(Storage.local.get(AUTH_TOKEN_KEY)).toBe(undefined);
    });
=======
>>>>>>> Stashed changes
  });
});
