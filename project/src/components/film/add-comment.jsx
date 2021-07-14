import React, {useState} from 'react';

function AddComment() {
  const [comment, setComment] = useState({
    rating: 0,
    commentText: '',
  });
  const ratingArray = [10,9,8,7,6,5,4,3,2,1];
  const renderStars = () => (
    ratingArray.map((item) => (
      <>
        <input
          className="rating__input"
          id={`star-${item}`}
          type="radio"
          name="rating"
          value={item}
          key={item}
          onChange={(evt) => {
            setComment(() => ({
              ...comment,
              rating: evt.target.value,
            }));
          }}
        />
        <label
          className="rating__label"
          htmlFor={`star-${item}`}
          key={item * 10}
        >
          Rating {item}
        </label>
      </>
    ))
  );

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
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
            onChange={(evt) => {
              setComment(() => ({
                ...comment,
                commentText: evt.target.value,
              }));
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
