import { heroReducer } from "~/reducers/heroReducer";
import { types } from "~/types/types";

describe('heroReducer tests', () => {
  
  test('should add a hero', () => {
    
    const initState = {
      team: []
    }

    const hero = {
      id: '1',
      name: 'fakeHero'
    }

    const action = {
      type: types.addHero,
      payload: hero,
    };

    const state = heroReducer(initState, action);

    expect(state).toEqual({
      team: [
        {
          id: '1',
          name: 'fakeHero'
        }
      ]
    });
  });

  test('should remove a hero', () => {
    
    const initState = {
      team: [
        {
          id: '1',
          name: 'fakeHero'
        }
      ]
    }

    const action = {
      type: types.removeHero,
      payload: '1'
    }

    const state = heroReducer(initState, action);

    expect(state).toEqual({team: []});
  });

  test('should not mutate the state', () => {
    
    const initState = [
        {
          id: '1',
          name: 'fakeHero'
        }
    ]

    const action = {
      type: 'wrong type'
    }

    const state = heroReducer(initState, action);

    expect(state).toEqual(initState);

  });
});