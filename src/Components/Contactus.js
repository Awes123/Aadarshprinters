import React from "react";

const Contactus = () => {
  return (
    <div class="container" id="contact">
      <div class="row mt-5 mb-5 col-lg-12">
        <div class="card col-lg-6 col-md-6 col-12 ">
          <div id="map-container-google-1" class="z-depth-1-half map-container">
            <iframe
              src="https://maps.google.com/maps?q=manhatan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              style={{ border: 0 }}
              width="500"
              height="650"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

        <div class="card  col-lg-6 col-md-6 ">
          <div class="card-body">
            <h4 class="card-title">
              <div class="container mb-5">
                <h1 class="text-center text-capitalize pt-5 ">Contact Us</h1>
              </div>
            </h4>
            <div class="w-50 mx-auto">
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="email">Your Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Name"
                    id="text"
                  />
                </div>
                <div class="form-group">
                  <label for="pwd">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    id="email"
                    autocomplete="offs"
                  />
                </div>
                <div class="form-group">
                  <label for="pwd">Mobile no:</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Your Mobile no"
                    id="email"
                    autocomplete="offs"
                  />
                </div>
                <div class="form-group">
                  <label>Textarea</label>
                  <textarea
                    class="form-control "
                    placeholder="Enter Your Textarea"
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
  );
};

export default Contactus;
