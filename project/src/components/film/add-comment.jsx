import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { ActionCreator } from '../../store/action';
import { Fragment } from 'react';
import { AppRoute } from '../../const';

function AddComment({film, getComments}) {
  const [commentary, setComment] = useState({
    rating: 0,
    comment: '',
  });
  const [isDisabled, setDisabled] = useState(false);

  const commentAttributes = commentary.comment.length >= 50 && commentary.rating !== 0;
  const token = localStorage.getItem('token') ?? '';

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisabled(true);

    fetch(`https://7.react.pages.academy/wtw/comments/${film.id}`, {
      method: 'POST',
      body: JSON.stringify(commentary),
      headers: new Headers ({
        'Content-Type': 'application/json',
        'x-token': token,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setDisabled(false);
        } else {
          throw Error(response.status);
        }
        return response;
      })
      .then((response) => response.json())
      .then((comments) => getComments(comments))
      .then(() => history.push(`/films/${film.id}`))
      .catch(() => {
        setDisabled(false);
        history.push(AppRoute.COMMENT_ERROR_SCREEN);
      });
  };

  const ratingArray = [10,9,8,7,6,5,4,3,2,1];
  const renderStars = () => (
    ratingArray.map((item) => (
      <Fragment key={item}>
        <input
          className="rating__input"
          id={`star-${item}`}
          type="radio"
          name="rating"
          value={item}
          onChange={(evt) => {
            setComment(() => ({
              ...commentary,
              rating: +evt.target.value,
            }));
          }}
          disabled={isDisabled}
        />
        <label
          className="rating__label"
          htmlFor={`star-${item}`}
        >
          Rating {item}
        </label>
      </Fragment>
    ))
  );

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {renderStars()}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength="50"
            maxLength="400"
            onChange={(evt) => {
              setComment(() => ({
                ...commentary,
                comment: evt.target.value,
              }));
            }}
            disabled={isDisabled}
          >
          </textarea>
          <div className="add-review__submit">
            {commentAttributes && !isDisabled ? (
              <button className="add-review__btn" type="submit">Post</button>
            ) : (
              <button className="add-review__btn" type="submit" disabled>Post</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

AddComment.propTypes = {
  getComments: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  activeFilm: state.activeFilm,
});

const mapDispatchToProps = (dispatch) => ({
  getComments(comments) {
    dispatch(ActionCreator.getComments(comments));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
