import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1></h1>
            <ul>
              <li>
                Last Updated: <div>Monday 25, 2021</div>
              </li>
              <li>Partly Cloudy</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src="rainy.png" alt="" className="float-left" />
                <div className="float-left">
                  <strong>25</strong>
                  <span className="units">℃</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span>15</span>%
                </li>
                <li>
                  Wind: <span>5</span>km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
          <small>
            <a href="https://github.com/Trinity737/weather-react">
              Open-Sourced Code
            </a>
            by Cheavon Pottinger
          </small>
        </div>
      </div>
    </div>
  );
}
