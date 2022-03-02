import { act } from 'react-dom/test-utils';
import reducer, { initialState } from '../../reducers/card';

describe('card reducer', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof reducer()).toBe('object');
    });
    it('should return a boolean', () => {
      expect(typeof initialState.openUpdateCardModal).toBe('boolean');
      expect(typeof initialState.isUpdateCardModalError).toBe('boolean');
      expect(typeof initialState.openDeleteCardModal).toBe('boolean');
      expect(typeof initialState.isDeleteCardModalError).toBe('boolean');
      expect(typeof initialState.cardDeletesSuccess).toBe('boolean');
    });
    it('should return a string', () => {
      expect(typeof initialState.cardId).toBe('string');
      expect(typeof initialState.newTitle).toBe('string');
      expect(typeof initialState.newDescription).toBe('string');
    });
    it('returns the state with initial state value when callesd without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });
  });
  describe('execution', () => {
    it('should handle correctly CLICK_ON_BUTTON_UPDATE_CARD action', () => {
      const mockDatas = {
        "cardId": 3,
        "newTitle": 'New Card',
        "newDescription": 'Here is a new description'
      };
      const action = {
        type: 'CLICK_ON_BUTTON_UPDATE_CARD',
        value1: mockDatas.cardId,
        value2: mockDatas.newTitle,
        value3: mockDatas.newDescription
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardId: 3,
        newTitle: 'New Card',
        newDescription: 'Here is a new description',
        openUpdateCardModal: true
      });
    });
    it('should handle correctly SET_UPDATE_CARD_INPUT_VALUE action', () => {
      const action = {
        type: 'SET_UPDATE_CARD_INPUT_VALUE',
        name: 'newTitle',
        value: 'Automne 2021'
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        newTitle: 'Automne 2021'
      });
    });
    it('should handle correctly CREATE_UPDATE_CARD_SUCCESS action', () => {
      const action = { type: 'CREATE_UPDATE_CARD_SUCCESS' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        openUpdateCardModal: false,
        cardId: '',
        newTitle: '',
        newDescription: '',
        isUpdateCardModalError: false
      });
    });
    it('should handle correctly CREATE_UPDATE_CARD_ERROR action', () => {
      const action = { type: 'CREATE_UPDATE_CARD_ERROR' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        isUpdateCardModalError: true
      });
    });
    it('should handle correctly CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD action', () => {
      const action = { type:'CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardId: '',
        openUpdateCardModal: false,
        newTitle: '',
        newDescription: '',
        isUpdateCardModalError: false
      });
    });
    it('should handle correctly CLICK_ON_BUTTON_DELETE_CARD action', () => {
      const action = {
        type: 'CLICK_ON_BUTTON_DELETE_CARD',
        value: 3
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardId: 3,
        openDeleteCardModal: true
      });
    });
    it('should handle correctly CREATE_DELETE_CARD_SUCCESS action', () => {
      const action = { type: 'CREATE_DELETE_CARD_SUCCESS' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardId: '',
        openDeleteCardModal: false,
        cardDeletesSuccess : true,
        isDeleteCardModalError: false
      });
    });
    it('should handle correctly CREATE_DELETE_CARD_ERROR action', () => {
      const action = { type: 'CREATE_DELETE_CARD_ERROR' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardId: '',
        cardDeletesSuccess : false,
        isDeleteCardModalError: true
      });
    });
    it('should handle correctly CLICK_ON_BUTTON_ESCAPE_DELETE_CARD action', () => {
      const action = { type: 'CLICK_ON_BUTTON_ESCAPE_DELETE_CARD' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardId: '',
        openDeleteCardModal: false,
        isDeleteCardModalError: false
      });
    });
    it('should handle correctly CARD_DELETE_SUCCESS_TO_FALSE action', () => {
      const action = { type: 'CARD_DELETE_SUCCESS_TO_FALSE' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardDeletesSuccess: false
      });
    });
  });
});