import React from "react";
import myPic from "./img/mypic.jpg";
import './css/about.css'

export default function AboutMe() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img src={myPic} width="100" className="rounded-circle" alt="My Profile" />
            </div>

            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0">Muhammad Sameer</h5>
              <span>Web Designer & Developer</span>

              <div className="px-4 mt-1">
                <p className="fonts">
                Greetings, I am Muhammad Sameer, a highly motivated and detail-oriented individual
                  actively seeking new opportunities. I possess robust problem-solving and
                  teamwork skills and am deeply committed to delivering work of the highest quality.
                  I am enthusiastic about gaining valuable experience and contributing to diverse projects.
                </p>
              </div>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    href="https://wa.me/03090248230"
                    className="text-reset text-decoration-none"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    href="https://sameer-khan0.github.io/react_portfolio/"
                    className="text-white text-decoration-none"
                  >
                    Portfolio
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
