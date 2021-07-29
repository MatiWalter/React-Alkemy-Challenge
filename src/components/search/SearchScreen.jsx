import React, { useState } from 'react'
import { useGetHeroName } from '../../hooks/useGetHeroName';
import { Pagination } from '../ui/Pagination';
import { HeroGrid } from '../hero/HeroGrid';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export const SearchScreen = () => {

  const [submited, setSubmited] = useState(false);
  const [hero, setHero] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(9);

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const { data: heroes } = useGetHeroName(hero);
  let currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);

  return (
    <div className="search">
      <h1 className="text-center">Look for a hero</h1>
      <div className="row mt-5 flex-column align-items-center">
        <div className="col-6 mb-3">
          <h4>Search</h4>
          <hr />
          <Formik
            initialValues={{ name: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              return errors;
            }}
            onSubmit={(values) => {
              if (values.name.trim().length > 0) {
                setHero(values.name);
              }
              setSubmited(true);
            }}
          >
            <Form
              className="d-grid gap-2"
            >
              <Field
                type="text"
                name="name"
                className="form-control"
                autoComplete="off"
                placeholder="Find your hero"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="alert alert-danger"
              />
              <button
                type="submit"
                className="btn m-1 btn-outline-primary"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <div className="col-11 mt-5">
          <h4>Results</h4>
          <hr />
          {
            submited && heroes.length > 0 &&
            <div className="d-flex justify-content-center flex-wrap mt-5">
              {
                <HeroGrid heroes={currentHeroes} />
              }
            </div>
          }
        </div>
        <Pagination
          heroesPerPage={heroesPerPage}
          totalHeroes={heroes.length}
          paginate={paginate}
        />
      </div>
    </div >
  )

}