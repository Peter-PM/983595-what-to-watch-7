import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilmCard from '../film-card/film-card';


function FilmList(props) {
  const {filmsStartRender, filmsStepRender} = props;

  const films = filmsStepRender ? props.films.slice(filmsStartRender, filmsStepRender) : props.films;

  return (
    <>
      {films.map((film) => (
        <article className="small-film-card catalog__films-card"  key={film.id}>
          <FilmCard film={film}/>
        </article>
      ))}
    </>
  );
}

FilmList.propTypes = {
  filmsStartRender: PropTypes.number,
  filmsStepRender: PropTypes.number,
  films: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  films: state.filmsByGenre,
  filmsStartRender: state.filmsStartRender,
  filmsStepRender: state.filmsStepRender,
});


export {FilmList};
export default connect(mapStateToProps, null)(FilmList);
