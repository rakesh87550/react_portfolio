import React from "react";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.src} alt="Card  cap" />
          <div className="card-body">
            <h3 className="card-title text-center font-weight-bold">{props.title}</h3>
            <p className="card-text text-center">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
