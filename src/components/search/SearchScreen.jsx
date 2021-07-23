import React, { useMemo, useState } from 'react'
import { useFormik } from 'formik';
import { getHeroesByName } from '../../helpers/getHeroes';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const [heroes, setHeroes] = useState([]);

  const validate = (values) => {
    const errors = {};
    if (values.name.trim().length === 0) {
      errors.name = 'Required';
    }
    return errors;
  }

  const onSubmit = async () => {
    const data = await getHeroesByName(formik.values.name.trim(''));
    setHeroes(data);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit
  });

  // const heroesFiltered = useMemo(() => {
  //   getHeroesByName(formik.values.name), 
  //   [formik.values.name]
  // });
  // console.log(heroesFiltered);

  return (
    <div className="search">
      <h1 className="text-center">Look for a hero</h1>
      <div className="row mt-5 flex-column align-items-center">
        <div className="col-6 mb-3">
          <h4>Search</h4>
          <hr />
          <form
            onSubmit={formik.handleSubmit}
            className="d-grid gap-2"
          >
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="name"
              id="name"
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? <div className="text-danger ms-2 d-flex align-items-center">{formik.errors.name}</div> : null}
            <button
              type="submit"
              className="btn m-1 btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        {
          heroes.length > 0 &&
          <div className="col-7 mt-5">
            <h4>Results</h4>
            <hr />
            {
              heroes.map(hero => {
                <HeroCard
                  key={hero.id}
                  {...hero}
                />
              })
            }
          </div>
        }
      </div>
    </div>
  )
}
