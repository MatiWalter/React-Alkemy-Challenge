/**
 * @jest-environment jsdom
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addHero, removeHero, teamLogout } from '~/actions/team';

import { types } from '~/types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('team actions tests', () => {
    
  beforeEach(()=> {
      store = mockStore(initState);
  });

  test('should create corresponding action', () => {
    const hero = {
      id: '1',
      name: 'fakeHero'
    }

    const addHeroAction = addHero(hero);
    const removeHeroAction = removeHero('1');
    const teamLogoutAction = teamLogout();

    expect(addHeroAction).toEqual({
        type: types.addHero,
        payload: {
          id: '1',
          name: 'fakeHero'
        }
    });

    expect(removeHeroAction).toEqual({
      type: types.removeHero,
      payload: hero.id
    });

    expect(teamLogoutAction).toEqual({
      type: types.logoutCleaning
    });

    
  });

  test('should dispatch addHero', () => {

    const hero = {
      id: '1',
      name: 'fakeHero'
    }

    store.dispatch(addHero(hero));
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.addHero,
      payload: {
        id: '1',
        name: 'fakeHero'
      }
    });
  });

  test('should dispatch removeHero', () => {
    const hero = {
      id: '1',
      name: 'fakeHero'
    }

    store.dispatch(removeHero(hero));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.removeHero,
      payload: {
        id: '1',
        name: 'fakeHero'
      }
    });
  });

  test('should dispatch teamLogout', () => {
    const hero = {
      id: '1',
      name: 'fakeHero'
    }

    store.dispatch(teamLogout(hero));
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.logoutCleaning,
    });
    
  }); 
});




