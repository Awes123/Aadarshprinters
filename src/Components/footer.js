import React from "react";

const footer = () => {
  return (
    <footer
      class=" page-footer font-small text-dark"
      style={{ backgroundColor: "#6c757dd1" }}
    >
      <div style={{ backgroundColor: "#21d192" }}>
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
            <h6 class="text-uppercase font-weight-bold">Company name</h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Products</h6>
            <p>
              <a class="text-dark" href="#!">
                MDBootstrap
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                MDWordPress
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                BrandFlow
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Bootstrap Angular
              </a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
            <p>
              <a class="text-dark" href="#!">
                Your Account
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a class="text-dark" href="#!">
                Shipping Rates
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
              <i class="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i class="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
        <div class="footer-copyright text-white text-center bg-dark py-3">
          © 2020 Copyright:
          <a class="text-white ml-2" href="https://mdbootstrap.com/">
            {" "}
            www.Quadintelletcx.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
