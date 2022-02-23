import React from "react";
import Card from "./Card";
import s1 from "../img/s1.jpg";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                src={s1}
                title="Web Designing"
                text="I am using HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP to design my awesome looking webpages."
              />
              <Card
                src={s1}
                title="Web Development"
                text="I am using PHP and MYSQL to develop my prjects like online examination system, online taxi booking system etc."
              />
              <Card
                src={s1}
                title="User Experience"
                text="I am using JAVASCRIPT, JQUERY to make user experience very fast and reliable."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
