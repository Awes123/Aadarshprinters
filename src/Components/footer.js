import React from "react";
import ima from "../Assets/images/pnglogo.png";
const footer = () => {
  return (
    <footer
      class=" page-footer font-small text-dark"
      style={{ backgroundColor: "#6c757dd1", fontFamily: "Quicksand" }}
    >
      <div style={{ backgroundColor: "#589272" }}>
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Get connected with us on social networks!</h6>
            </div>
            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <a class="fb-ic">
                <i class="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class=" text-center text-md-left mt-5">
        <div class="row mt-3 dark-grey-text">
          <div class=" container col-md-3 col-lg-4 col-xl-3 mb-4">
            <img src={ima} alt="Logo" style={{ width: 234, height: 116 }} />
            {/* <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p> */}
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto ml-5 mt-2">
            <h6 class="text-uppercase font-weight-bold">Services</h6>
            <p>
              <a class="text-dark" href="#!">
                Prescription Pad
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Hospital Files
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Leaflets & Flyer
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Stickers
              </a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold"></h6>
            <p>
              <a class="text-dark" href="#!">
                Notebooks
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                School Diary
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Corporate, Social Sector
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Help
              </a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <p>
              <i class="fas fa-home mr-3"></i> Plot No 23, Town Center, CIDCO N
              1, Aurangabad-Maharashtra - 431006.
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i> aadarsh9561@gmail.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i> +919561801015
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i> +919764178089
            </p>
          </div>
        </div>
        <div class="footer-copyright row col-lg-12 bg-dark text-white text-center py-3">
          <div class="col-lg-6">© 2020 Copyright: Aadarsh Printers</div>
          <div class="col-lg-6">
            Developed by:
            <a
              href="https://www.quadintellectx.com/"
              class="ml-2"
              style={{ color: "rgb(255, 255, 255)" }}
            >
              www.Quadintelletcx.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
