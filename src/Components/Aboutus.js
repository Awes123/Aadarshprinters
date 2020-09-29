import React from "react";
import imageto from "../Assets/images/machine08.jpeg";
const Aboutus = () => {
  return (
    <div className="container" id="about">
      <h1 className="text-center text-capitalize pt-4">about us</h1>

      <div className="row featurette mt-4 mb-5">
        <div className="col-md-5">
          <img src={imageto} height="500" width="500" />
        </div>
        <div className="col-md-5 ml-5">
          <h2 className="featurette-heading">
            Aadarsh <span className="text-muted">Printers</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus,tellus ac cursus
            commodo. Donec ullamcorper nulla non metus auctor fringilla.
            Vestibulum id ligula porta felis euismod semper. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,tellus
            ac cursus commodo.Donec ullamcorper nulla non metus auctor
            fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur. Fusce
            dapibus,tellus ac cursus commodo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
