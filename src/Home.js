import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your custom styles if needed

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider-wrapper'
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://site.surveysparrow.com/wp-content/uploads/2021/11/support-ticketing-system-768x512.jpg"
          alt="First slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Welcome to our Website</h2>
          <p>Positive vibes!</p>
        </div>
      </div>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://d1n03xfl93cx9q.cloudfront.net/wp-content/uploads/2022/08/what-is-help-desk-what-is-its-purpose-in-business.jpg"
          alt="Second slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Find Your Perfect Solution</h2>
          <p>
            Explore our diverse range of services.
          </p>
        </div>
      </div>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://www.trackplus.com/blog/wp-content/uploads/2021/02/ticketsystem-vergleich-und-test-2021.jpg"
          alt="Third slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Join Our Community</h2>
          <p>Connect with us and share your problems.</p>
        </div>
      </div>
      <div>
        <img
          className="d-block w-100 slider-image"
          src="https://gogenuity.com/assets/images/blog/you-need-an-it-helpdesk-7711c349.jpg"
          alt="Fourth slide"
        />
        <div className="carousel-caption text-overlay">
          <h2>Support services</h2>
          <p>Every problem deserves a perfect solution!!</p>
        </div>
      </div>
    </Slider>
  );
};

export default Home;
