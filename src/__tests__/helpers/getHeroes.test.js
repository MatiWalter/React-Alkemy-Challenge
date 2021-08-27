import { getHeroesByName, getHeroById } from "~/helpers/getHeroes";

describe('getHeroes helpers tests', () => {

  const mockHero = {
    id: '1',
    name: 'fakeHero'
  }

  global.fetch = jest.fn().mockReturnValue({
    json: () => ({ data: mockHero }),
  });

  test('should return a hero', async () => {
    const hero = await getHeroById('1');
    expect(hero.id).toBe(mockHero.id);
  });

  test('should return an error', async () => {
    const hero = await getHeroById('9999');
    expect(hero).toMatchObject({
      response: 'error',
      error: 'invalid id'
    });
  });
  

  describe('getHeroesByName tests', () => {

    const mockHero = [
      {
        id: '1',
        name: 'a'
      },
      {
        id: '2',
        name: 'b'
      },
      {
        id: '3',
        name: 'b'
      }
    ];

    global.fetch = jest.fn().mockReturnValue({
      json: () => ({ data: mockHero }),
    });

    test('should return a hero', async () => {
      const heroes = await getHeroesByName('batman');
      expect(heroes.length).toBe(mockHero.length);
    });

    test('should return an error', async () => {
      const heroes = await getHeroesByName('FakeHero');
      expect(heroes.length).toBe(0);
    });
  });
});

