import reducer, { initialState } from '../../reducers/user';

describe('user reducer', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof reducer()).toBe('object');
    });
    it('should return a boolean', () => {
      expect(typeof initialState.isError).toBe('boolean');
      expect(typeof initialState.isLogged).toBe('boolean');
      expect(typeof initialState.openLogout).toBe('boolean');
    });
    it('should return a string', () => {
      expect(typeof initialState.email).toBe('string');
      expect(typeof initialState.password).toBe('string');
      expect(typeof initialState.firstname).toBe('string');
    });
    it('should return an object', () => {
      expect(typeof initialState.restaurant).toBe('object');
      expect(typeof initialState.token).toBe('object');
    });
    it('returns the state with initial state value when callesd without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });
  });
  describe('execution', () => {
    it('should handle correctly SET_IMPUT_VALUE action', () => {
      const action = {
        type: 'SET_INPUT_VALUE',
        name: 'email',
        value: 'sebastien.parmentier@outlook.fr'
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        email: 'sebastien.parmentier@outlook.fr'
      });
    });
    it('should handle correctly LOGIN_SUCCESS action', () => {
      const mockApiData = {
        "firstname": 'Sébastien',
        "restaurant": {
          id: 1,
          name: "MUNDO LATINO"
        },
        "accessToken": "un faux token"
      };
      const action = {
        type:'LOGIN_SUCCESS',
        data: mockApiData
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        firstname: 'Sébastien',
        restaurant: {
          id: 1,
          name: 'MUNDO LATINO'
        },
        token: "un faux token",
        isLogged: true
      });
    });
    it('should handle correctly LOGIN_ERROR action', () => {
      const action = { type: 'LOGIN_ERROR'};
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        isError: true
      });
    });
    it('should handle correctly CLICK_ON_BUTTON_LOGOUT', () => {
      const mockLogout = !initialState.openLogout;
      const action = { type: 'CLICK_ON_BUTTON_LOGOUT' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        openLogout: mockLogout
      });
    });
    it('should handle correctly CLICK_ON_LOGOUT action', () => {
      const action = { type : 'CLICK_ON_LOGOUT'};
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        email: '',
        password: '',
        firstname: '',
        restaurant: '',
        token: null,
        isError: false,
        isLogged: false,
        openLogout: false
      });
    });
  });
});