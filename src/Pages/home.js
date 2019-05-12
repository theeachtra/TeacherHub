import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./home.css";
import SlideShow from "../components/Slideshow/slideshow";


const images = [
  "https://www.incimages.com/uploaded_files/image/970x450/getty_513881682_2000124120009280226_343051.jpg",
  "https://www.gettingsmart.com/wp-content/uploads/2017/02/IMG_8153.jpg",
  "https://news.wttw.com/sites/default/files/article/image-non-gallery/DSC_0447.JPG",
  "https://d68b3152cf5d08c2f050-97c828cc9502c69ac5af7576c62d48d6.ssl.cf3.rackcdn.com/includes/img/cms/site-images/orig/kingston-university-de14fde-international-students---kingst.jpg"
];

function Home() {
  return (
    <React.Fragment>
      <div className="siteLogo">
        <img
          src="./images/images.png"
          alt="Teacher Hub"
          width="350"
          height="200"
        />
      </div>

      <main className="content">
        {/* REACT SLIDESHOW */}
        <SlideShow images={images} />

        {/* <Weather /> */}

        <div className="weather" id="weather">
          <a target="_blank" href="https://www.booked.net/weather/dallas-26868">
            <img
              src="https://w.bookcdn.com/weather/picture/4_26868_0_1_137AE9_251_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=36720"
              alt="booked.net"
            />
          </a>
        </div>

        <div className="announcement">
          <h2>Announcement</h2>
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

        {/* REACT CALENDAR */}
        {/* <Calendar /> */}

        <div className="calendar" id="calendar">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=n2gp49csv98ldcdr7t6g6m66f4%40group.calendar.google.com&ctz=America%2FChicago"
            style={{
              border: 0,
              width: 800,
              height: 600,
              frameborder: 0,
              scrolling: "no"
            }}
          />
        </div>

        
      </main>
    </React.Fragment>
  );
}

export default Home;
