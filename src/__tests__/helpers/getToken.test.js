import { getToken } from "~/helpers/getToken";

describe('getToken tests', () => {
  
  test('should ', async () => {
    
    const token = await getToken({email: 'challenge@alkemy.org', password: 'react'});
    expect(typeof token).toBe('string');
    
  });

});
