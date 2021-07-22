/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render } from "@testing-library/react";
 import { SuperheroesApp } from "../SuperheroesApp";
 
 test('Debe mostrar un elemento h1 con el texto "SuperheroesApp"', () => {
   
   const { getByText } = render(<SuperheroesApp />);
   expect(getByText('SuperheroesApp')).toBeInTheDocument();
 
 });