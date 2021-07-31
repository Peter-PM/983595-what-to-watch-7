import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { formatDateComments } from '../../utils/utils';

function Comments({comments}) {
  const oneCol = comments.slice(0, Math.ceil(comments.length/2));
  const twoCol = comments.slice(Math.ceil(comments.length/2), comments.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {oneCol.map((comment) => (
          <div className="review" key={comment.id}>
            <blockquote className="review__quote">
              <p className="review__text">
                {comment.comment}
              </p>

              <footer className="review__details">
                <cite className="review__author">
                  {comment.user.name}
                </cite>
                <time className="review__date" dateTime="2016-12-24">
                  {formatDateComments(comment.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">
              {comment.rating}
            </div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {twoCol.map((comment) => (
          <div className="review" key={comment.id}>
            <blockquote className="review__quote">
              <p className="review__text">
                {comment.comment}
              </p>

              <footer className="review__details">
                <cite className="review__author">
                  {comment.user.name}
                </cite>
                <time className="review__date" dateTime="2016-12-24">
                  {formatDateComments(comment.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">
              {comment.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export {Comments};
export default connect(mapStateToProps, null)(Comments);
