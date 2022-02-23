import React from "react";
import Card from "./Card";
import p1 from "../img/project1.png";
import p2 from "../img/project2.png";
import p3 from "../img/project3.png";

function Projects() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Projects</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                src={p1}
                title="Taxi Booking System"
                text="This is a online taxi booking system with instamojo payment gateway."
              />
              <Card
                src={p2}
                title="Online Examination System"
                text="This is a online examination system with instant result checking."
              />
              <Card
                src={p3}
                title="Corona Updates With States"
                text="This is a online way to shows live corona cases in all states of India."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
