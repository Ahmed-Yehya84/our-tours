import React, { useState } from "react";

const Tour = ({ id, price, name, info, image, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "show more"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
