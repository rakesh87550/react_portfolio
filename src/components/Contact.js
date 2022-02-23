import React from "react";

function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <form>
                  <div class="form-group my-4">
                    <label for="exampleInputEmail1">Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="form-group my-4">
                    <label for="exampleInputEmail1">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div class="form-group my-4">
                    <label for="exampleFormControlTextarea1">
                      Your Message
                    </label>
                    <textarea
                      class="form-control" rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
