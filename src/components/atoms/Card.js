import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
        onClick={() => window.location.replace(`/${heading}`)}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="heading">{heading}</h1>
      </div>
    </div>
  )
}

export default Card
