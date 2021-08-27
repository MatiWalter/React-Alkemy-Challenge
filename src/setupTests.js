import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;