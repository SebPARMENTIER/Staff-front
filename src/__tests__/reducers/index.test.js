import rootReducer from "../../reducers";

describe('root reducer', () => {
  describe('structure', () => {
    it('souhld be a function', () => {
      expect(typeof rootReducer).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof rootReducer()).toBe('object');
    });
  });
});