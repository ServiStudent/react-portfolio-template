import React from "react"

const Card = ({ imgUrl }) => {
  return (
    <div
      className="card"
      id="photos"
      style={{
        backgroundImage:
          "url(" +
          imgUrl +
          ")",
      }}
    >
    </div>
  )
};

export default Card
