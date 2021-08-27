import { types } from '~/types/types';


describe('test with types', () => {

    test('should have this types', () => {

        expect( types ).toEqual({
          login: '[auth] login',
          logout: '[auth] logout',
        
          addHero: '[team] add Hero',
          removeHero: '[team] remove Hero',
          logoutCleaning: '[team] clean team'
        });
    });
});
