import React from "react";

export default function Hearder() {
  return (
    <>
      <nav>
        <div className="row">
          <div className="col-md-4">
            <a href="index.html">
              <img
                src="IMG\JT-logo.png"
                className="header_log"
                id="header_log"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-4 ms-auto">
            <ul className="media-list">
              <a href="https://github.com/JohadToledo" className="contact">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/johad-toledo-webdeveloper/"
                className="contact"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
