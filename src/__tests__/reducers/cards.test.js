import reducer, { initialState } from '../../reducers/cards';

describe('cards reducer', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof reducer()).toBe('object');
    });
    it('should return a boolean', () => {
      expect(typeof initialState.isError).toBe('boolean');
      expect(typeof initialState.openAddNewCardModal).toBe('boolean');
      expect(typeof initialState.isAddNewCardModalError).toBe('boolean');
      expect(typeof initialState.openUpdateCardModal).toBe('boolean');
      expect(typeof initialState.isUpdateCardModalError).toBe('boolean');
      expect(typeof initialState.isLoading).toBe('boolean');
    });
    it('should return a string', () => {
      expect(typeof initialState.title).toBe('string');
      expect(typeof initialState.description).toBe('string');
      expect(typeof initialState.cardId).toBe('string');
      expect(typeof initialState.newTitle).toBe('string');
      expect(typeof initialState.newDescription).toBe('string');
    });
    it('shoulb return an object', () => {
      expect(typeof initialState.cardsName).toBe('object');
    });
    it('returns the state with initial state value when callesd without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });
  });
  describe('execution', () => {
    it('should handle correctly GET_ALL_CARDS action', () => {
      const action = { type: 'GET_ALL_CARDS' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        isLoading: true
      });
    });
    it('should handle correctly GET_ALL_CARDS_SUCCESS action', () => {
      const mockApiData = [
        {
          "id": 1,
          "title": "Printemps 2022",
          "description": "Carte printemps 2021 avec nouvelles salades",
          "restaurant_id": 1,
          "restaurant": {
            "id": 1,
            "name": "MUNDO LATINO",
            "adress": "4 cours Jourdan",
            "zip_code": "87000",
            "city": "LIMOGES",
            "phone": "0555101055",
            "email": "mundolatino@gmail.com"
          }
        } 
      ];
      const action = {
        type: 'GET_ALL_CARDS_SUCCESS',
        data: mockApiData
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardsName: [
          {
            id: 1,
            title: "Printemps 2022",
            description: "Carte printemps 2021 avec nouvelles salades",
            restaurant_id: 1,
            restaurant: {
              id: 1,
              name: "MUNDO LATINO",
              adress: "4 cours Jourdan",
              zip_code: "87000",
              city: "LIMOGES",
              phone: "0555101055",
              email: "mundolatino@gmail.com"
            }
          }
        ],
        isLoading: false
      });
    });
    it('should handle correctly GET_ALL_CARDS_ERROR action', () => {
      const action = { type: 'GET_ALL_CARDS_ERROR' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        isError: true,
        isLoading: false
      });
    });
    it('should handle correctly CLICK_ON_LOGOUT action', () => {
      const action = { type : 'CLICK_ON_LOGOUT'};
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        cardsName: [],
        isError: false,
        openAddNewCardModal: false,
        title: '',
        description: '',
        isAddNewCardModalError: false,
        openUpdateCardModal: false,
        newTitle: '',
        newDescription: '',
        isUpdateCardModalError: false,
        isLoading: false
      });
    });
    it('should handle correctly CLICK_ON_BUTTON_ADD_NEW_CARD action', () => {
      const action = { type : 'CLICK_ON_BUTTON_ADD_NEW_CARD'};
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        openAddNewCardModal: true
      });
    });
    it('should handle correctly SET_ADD_NEW_CARD_INPUT_VALUE action', () => {
      const action = {
        type: 'SET_ADD_NEW_CARD_INPUT_VALUE',
        name: 'title',
        value: 'Hiver 2022'
      };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        title: 'Hiver 2022'
      });
    });
    it('should handle correctly CREATE_ADD_NEW_CARD_SUCCESS action', () => {
      const action = { type: 'CREATE_ADD_NEW_CARD_SUCCESS' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        openAddNewCardModal: false,
        title: '',
        description: '',
        isAddNewCardModalError: false
      });
    });
    it('should handle correctly CREATE_ADD_NEW_CARD_ERROR action', () => {
      const action = { type: 'CREATE_ADD_NEW_CARD_ERROR' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        isAddNewCardModalError: true
      });
    });
    it('should handle correctly CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD action', () => {
      const action = { type: 'CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD' };
      const state = reducer();
      const newState = reducer(state, action);
      expect(newState).toEqual({
        ...state,
        openAddNewCardModal: false,
        title: '',
        description: '',
        isAddNewCardModalError: false
      });
    });
  });
});