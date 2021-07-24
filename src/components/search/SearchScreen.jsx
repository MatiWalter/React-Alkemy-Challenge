import React, { useState } from 'react'
import { useGetHeroName } from '../../hooks/useGetHeroName';
import { Pagination } from '../ui/Pagination';
import { HeroGrid } from '../hero/HeroGrid';

export const SearchScreen = ({ history }) => {

  const [submited, setSubmited] = useState(false);
  const [searchHero, setSearchHero] = useState();
  const [hero, setHero] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(9);

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    setHero(searchHero)
  }

  const handleChange = (e) => {
    setSearchHero(e.target.value);
  }

  const { data: heroes } = useGetHeroName(hero);
  let currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);

  return (
    <div className="search">
      <h1 className="text-center">Look for a hero</h1>
      <div className="row mt-5 flex-column align-items-center">
        <div className="col-6 mb-3">
          <h4>Search</h4>
          <hr />
          <form
            onSubmit={handleSubmit}
            className="d-grid gap-2"
          >
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="name"
              id="name"
              autoComplete="off"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        {
          <div className="col-11 mt-5">
            <h4>Results</h4>
            <hr />
            {
              (heroes.length === 0 && hero !== '')
              &&
              <div className="alert alert-info">
                Search a hero
              </div>
            }
            <div className="d-flex justify-content-center flex-wrap mt-5">
              {
                submited &&
                heroes.length > 0 &&
                <HeroGrid heroes={currentHeroes} />
              }
            </div>
          </div>
        }
        <Pagination
          heroesPerPage={heroesPerPage}
          totalHeroes={heroes.length}
          paginate={paginate}
        />
      </div>
    </div >
  )
}
