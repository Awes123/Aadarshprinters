import React from "react";
import imageone from "../Assets/images/busnies.jpg";
import imageto from "../Assets/images/booklets.jpg";
import imagethree from "../Assets/images/camra.jpg";

const Services = () => {
  return (
    <div className="container" id="Servies">
      <h1 className="text-center text-capitalize pt-4">Services </h1>

      <div className="row text-center mt-4 mb-4">
        <div className="col-12 col-lg-4 col-md-4">
          <div classNameName="card hover-shadow">
            <div classNameName="card-body">
              <img
                src={imageone}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2>Business Card</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <div classNameName="card hover-shadow">
            <div classNameName="card-body">
              <img
                src={imageto}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2>Booksletss </h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <div classNameName="card hover-shadow">
            <div classNameName="card-body">
              <img
                src={imagethree}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2>Banner</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mt-4 mb-4">
        <div className="col-12 col-lg-4 col-md-4">
          <div classNameName="card hover-shadow">
            <div classNameName="card-body">
              <img
                src={imageone}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2>Business Card</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <div classNameName="card hover-shadow">
            <div classNameName="card-body">
              <img
                src={imageto}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2>Booksletss </h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <div classNameName="card hover-shadow">
            <div classNameName="card-body">
              <img
                src={imagethree}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2>Banner</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
