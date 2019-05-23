import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./home.css";
import SlideShow from "../Components/Slideshow/slideshow";
import Weather from "../Components/Weather/weather";

const images = [
  "https://www.incimages.com/uploaded_files/image/970x450/getty_513881682_2000124120009280226_343051.jpg",
  "https://www.gettingsmart.com/wp-content/uploads/2017/02/IMG_8153.jpg",
  "https://news.wttw.com/sites/default/files/article/image-non-gallery/DSC_0447.JPG",
  "https://d68b3152cf5d08c2f050-97c828cc9502c69ac5af7576c62d48d6.ssl.cf3.rackcdn.com/includes/img/cms/site-images/orig/kingston-university-de14fde-international-students---kingst.jpg"
];

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="siteLogo">
          <img
            src="./images/images.png"
            alt="Teacher Hub"
            width="900"
            height="400"
          />
        </div>

        <Weather />
      </div>

      <main className="content">
        {/* REACT SLIDESHOW */}
        <SlideShow images={images} />
        <br />

        <div className="announcement">
          <h2>Announcements</h2>
          <ul>
            <li>
              Students, please remember to bring your signed permission slips by
              Tuesday if you plan on joining us on our trip to the Perot Museum.
            </li>
            <li>
              Parents, please email me if you are wanting to be a chaperone
              during our Perot Museum Field Trip.
            </li>
            <li>
              Please note that we will be having a potluck on Monday May 5th in
              observance of Cinco De Mayo!
            </li>
          </ul>
        </div>

        <br />
        <br />

        <div
          className="calendar"
          style={{
            border: "0",
            margin: "0 auto",
            id: "calendar"
          }}
        >
          <iframe
            title="googleCalendar"
            src="https://calendar.google.com/calendar/embed?src=n2gp49csv98ldcdr7t6g6m66f4%40group.calendar.google.com&ctz=America%2FChicago"
            style={{
              width: "850px",
              height: "650px",
              frameborder: "0",
              scrolling: "no"
            }}
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
