import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import "../../styles/LandingPage.css";
import { TbArrowBack } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const LandingPage = () => {
  // const location = useLocation();
  // const[isLoggedIn, setIsLoggedIn] = useState(false);
  // const isLoggedIn1 = location.state?.isLoggedIn;
  // React.useEffect(() => {
  //   if (location.state?.isLoggedIn) {
  //     setIsLoggedIn(true);
  //   }
  // }, [location.state]);
  // const navigate = useNavigate();
  // console.log("Is Logged In:", isLoggedIn);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();
  const imgArr = [
    {
      img: "/Tower.svg",
    },
    {
      img: "/Tower.svg",
    },
    {
      img: "/Tower.svg",
    },
    {
      img: "/Tower.svg",
    },
    {
      img: "/Tower.svg",
    },
    {
      img: "/Tower.svg",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <div className="custom-arrow-left absolute top-1/2 -translate-y-1/2 left-[-40px] z-10">
        <BsArrowLeftCircle className="text-4xl text-[#63C5DA] cursor-pointer hover:text-[#47a7bf] transition-all duration-300" />
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow-right absolute top-1/2 -translate-y-1/2 right-[-40px] z-10">
        <BsArrowRightCircle className="text-4xl text-[#63C5DA] cursor-pointer hover:text-[#47a7bf] transition-all duration-300" />
      </div>
    ),
  };

  const reviewsArr = [
    { name: "Sophie Leone", review: "A Happy Customer", img: "/person.svg" },
    { name: "John Doe", review: "Great Service!", img: "/person.svg" },
    { name: "Jane Smith", review: "Highly Recommend!", img: "/person.svg" },
    { name: "Mark Johnson", review: "Very Satisfied!", img: "/person.svg" },
  ];
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div className="custom-arrow-left">
        <BsArrowLeftCircle className="text-4xl text-[#63C5DA] cursor-pointer hover:text-[#47a7bf] transition-all duration-300" />
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow-right">
        <BsArrowRightCircle className="text-4xl text-[#63C5DA] cursor-pointer hover:text-[#47a7bf] transition-all duration-300" />
      </div>
    ),
  };
  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState({ lat: 41.3851, lng: 2.1734 }); // default to Barcelona

  const containerStyle = {
    width: "600px",
    height: "400px",
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn("Geolocation not allowed. Using default location.");
        }
      );
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAEOzozYCsDelJTwhv-pOJtxNk69SPgEzo", // Replace with your key
  });

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const [isPartner, setIsPartner] = useState(false);
  return (
    <>
      <div className="page p-2 pl-15 pr-15">
        <div className="navbar flex p-2 pl-15 pr-15  m-4 justify-between text-2xl ">
          <div className="flex">
            <div className="logo-bag"></div>
            <div className="logo"></div>
          </div>
          <div className="nav-links flex gap-15">
            <div className="relative">
              <select className="appearance-none border-2 border-[#FA8128] rounded-lg p-2 pr-10 bg-white">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src="/Dropdown.svg" alt="" className="w-7 h-7" />
              </div>
            </div>
            <div className="burger p-2">
              <GiHamburgerMenu
                size={35}
                color="#FA8128"
                onClick={() => {
                  if (isLoggedIn) {
                    navigate("/useroverview");
                  }
                  if (isPartner && isLoggedIn) {
                    navigate("/partneroverview");
                  }
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="section-1 flex justify-between">
          <div className="section-1-left mt-[-2%] h-[600px] w-[850px]"></div>
          <div className="section-1-right h-[600px] w-[800px] pt-15 pb-10 pr-15  flex-col justify-between text-right">
            <div className="text-[#FA8128] text-[25px]   ">
              Trusted by 200+ bagpackers
            </div>
            <div className=" ">
              <div className="text-[#FA8128] text-[55px] font-bold mb-[-15px] ">
                Keep your Luggage Safe
              </div>
              <div className="text-[#63C5DA] text-[55px] mb-[-15px] ">
                Wherever You Go
              </div>
              <div className="text-[#FA8128] text-[30px] ">
                Starting from 10€ an hour
              </div>
            </div>
            <div className="flex flex-col items-end mt-10">
              <div className="relative w-[500px]">
                <input
                  className="border-2 rounded-4xl p-2 w-full mb-2 text-[#63C5DA] font-extrabold shadow-md pr-12 h-12"
                  placeholder="Barcelona"
                  type="text"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-4 text-[#63C5DA]">
                  <IoIosSearch size={24} />
                </span>
              </div>

              <button
                onClick={() => {
                  navigate("/bookingpage", { state: { isLoggedIn } });
                }}
                className="pl-12 pr-12 py-2 text-white rounded-4xl bg-[#FA8128] shadow-md"
              >
                Search
              </button>
            </div>

            <div className="mt-10 flex flex-col items-end">
              <div className="flex items-center text-[#FA8128] text-[22px] gap-2 justify-end">
                <TbArrowBack />
                <span>Free Cancellation</span>
              </div>

              <div className="flex items-center text-[#FA8128] text-[22px] gap-2 justify-end">
                <FaLock />
                Luggage Protection €10,000
              </div>

              <div className="flex items-center text-[#FA8128] text-[22px] gap-2 justify-end">
                <GiWorld />
                10000+ spots
              </div>
            </div>
          </div>
        </div>

        {/* section2 */}

        <div className="section-2 flex  items-center mt-10  gap-48 ml-30 ">
          <div className="section-2-left h-[500px] w-[500px] ml-10 pt-30 pb-8 pl-16 flex-col justify-between text-left border-4 rounded-[50%] border-[#FA8128]">
            <div className="flex flex-col gap-1">
              <div className="steps text-[20px] leading-tight">Step 1</div>
              <div className="steps-content text-[#63C5DA] text-[35px] leading-none">
                Book Luggage <span className="text-[#FA8128]">Storage</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-6">
              <div className="steps text-[20px] leading-tight">Step 2</div>
              <div className="steps-content text-[#63C5DA] text-[35px] leading-none">
                Drop Your <span className="text-[#FA8128]">Luggage</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-6">
              <div className="steps text-[20px] leading-tight">Step 3</div>
              <div className="steps-content text-[#63C5DA] text-[35px] leading-none">
                Enjoy Your <span className="text-[#FA8128]">Stay</span>
              </div>
            </div>
          </div>

          <div className="luggage-man h-[500px] w-[20px] z-50 translate-x-[370px] translate-y-10 absolute"></div>

          <div className="section-2-right h-[450px] w-[400px] flex flex-col justify-center items-end pr-5 leading-tight">
            <div className="text-[#63C5DA] text-[50px] font-bold">
              How does it
            </div>
            <div className="text-[#FA8128] text-[50px] font-bold">work?</div>
          </div>
        </div>

        <div className="section-3 mt-40">
          <div className="text-[#63C5DA] text-[45px] font-bold text-center">
            We have your back for the{" "}
            <span className="text-[#FA8128] ml-7">Luggage</span>
          </div>
          <div className="relative">
            <div className="w-[50%] ml-[4%] mt-28 p-10 pr-20 border-2 border-[#63C5DA] border-l-0 ">
              <div className="text-[50px] font-bold text-end leading-tight">
                <div className="text-[#FA8128]">Services starting</div>
                <div className="text-[#FA8128]">from just</div>
                <div className="text-[#63C5DA]">€4.5</div>
              </div>

              <div className="text-[#FA8128] text-end text-[22px] leading-tight mt-5">
                <div className="">Available 24/7</div>
                <div className="">Cheaper and Safe</div>
              </div>
            </div>
            <div className="suitcase z-10 absolute translate-x-[176%] -translate-y-[80%]"></div>
          </div>
        </div>
        <div className="section-4 mt-45 flex flex-col items-center">
          <div className="text-[#63C5DA] text-[45px] font-bold text-center">
            <span className="text-[#FA8128]">Reviews </span>
            from our Backpackers
          </div>

          <Slider {...settings2} className="w-[80%]  mt-10  ">
            {reviewsArr.map((review, index) => (
              <div
                key={index}
                className="reviews h-[500px] w-[70%] p-5 flex justify-between items-center border-[#63C5DA] mt-5 mx-auto"
              >
                {/* Middle Content */}
                <div className="flex flex-[70%] border-2 border-[#63C5DA] p-5 px-10 text-center items-center rounded-lg shadow-md box-border w-full">
                  {/* Image Section */}
                  <div className="reviews-left flex-[35%] flex justify-center items-center">
                    <img
                      src={review.img}
                      alt="Person"
                      className="h-[80%] w-auto object-cover shadow-[-8px_-8px_10px_#FA8128,-8px_8px_10px_#FA8128]"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="reviews-right flex-[65%] text-left pl-5">
                    <p className="text-2xl font-bold text-gray-700">
                      {review.name}
                    </p>
                    <p className="text-lg text-gray-500 mt-2">
                      {review.review}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
              </div>
            ))}
          </Slider>
        </div>

        <div className="section-5 mt-50">
          <div className="w-[75%] ml-[4%] mt-28 p-10 pr-20 border-2 border-[#63C5DA] border-l-0 ">
            <div className="text-[50px] font-bold  leading-tight">
              <div className="text-[#FA8128]">
                No more worries about your luggage!
              </div>
              <div className="text-[#63C5DA]">
                We take care of it like its our own
              </div>
            </div>

            <div className="text-[#FA8128]  text-[30px] leading-tight mt-15">
              <div className="">Comprehensive Protection</div>
              <div className="text-[#63C5DA]">
                Your luggage is safeguarded with coverage up to €10,000 for
                damage, loss, or theft.
              </div>
            </div>
            <div className="text-[#FA8128]  text-[30px] leading-tight mt-10">
              <div className="">Reliable storage partners</div>
              <div className="text-[#63C5DA]">
                Our verified partners ensure secure handling through ID checks
                and reservation confirmations
              </div>
            </div>
          </div>
          <div className="luggage z-10 absolute translate-x-[1050px] -translate-y-[580px]"></div>
        </div>
        <div className="section-6 mt-25 ml-[7%]">
          <div className="text-[#FA8128] text-[45px] font-bold  ">
            Accessible Everywhere!
          </div>
          <div className="text-[#63C5DA] text-[45px]   ">
            Safe and reliable luggage storage{" "}
            <span className="text-[#FA8128] font-medium">WORLDWIDE.</span>
          </div>
          <div className="">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Optional: Add a Marker at user's location */}
                <></>
              </GoogleMap>
            )}
          </div>
        </div>
        <div className="section-7 mt-25 mx-auto max-w-[90%]">
          <div className="text-[#FA8128] text-[45px] font-bold text-center ">
            Frequently <span className="text-[#63C5DA]">Asked Questions</span>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8 text-center">
            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-[#FA8128] font-semibold">
                  What is Baggage Bugs storage?
                </h3>
                <HiArrowNarrowRight className="text-[#63C5DA] text-2xl ml-2" />
              </div>
            </div>

            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-[#FA8128] font-semibold">
                  How to book luggage storage?
                </h3>
                <HiArrowNarrowRight className="text-[#63C5DA] text-2xl ml-2" />
              </div>
            </div>

            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-[#FA8128] font-semibold">
                  How much does luggage cost?
                </h3>
                <HiArrowNarrowRight className="text-[#63C5DA] text-2xl ml-2" />
              </div>
            </div>

            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-[#FA8128] font-semibold">
                  Cost of 2 days of luggage?
                </h3>
                <HiArrowNarrowRight className="text-[#63C5DA] text-2xl ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-8 mt-40 items-center flex justify-center gap-4">
          <Slider {...settings} className="w-[80%] px-10">
            {imgArr.map((d, index) => (
              <div key={index} className="tower p-4 rounded-lg">
                <img
                  src={d.img}
                  alt={`Tower ${index}`}
                  className="w-[300px] h-[200px] rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="section-9 mt-40 w-full pl-[7%]  pr-[4%]  flex h-[500px]">
          <div className="section-9-left w-[50%]   flex flex-col gap-5">
            <div className="leading-tight">
              <div className="text-[#FA8128] text-[70px] font-bold ">About</div>
              <div className="text-[#63C5DA] text-[70px] font-bold  ">
                Baggage Bugs
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/Rating.svg" alt="Star" className="w-8 h-8" />
              <img src="/Rating.svg" alt="Star" className="w-8 h-8" />
              <img src="/Rating.svg" alt="Star" className="w-8 h-8" />
              <img src="/Rating.svg" alt="Star" className="w-8 h-8" />
              <img src="/Rating.svg" alt="Star" className="w-8 h-8" />
            </div>
            <div className="leading-tight">
              <div className="text-[#63C5DA] text-[25px] ">
                5 star ratings by <span className="text-[#FA8128] ">2345+</span>{" "}
                verified{" "}
              </div>
              <div className="text-[#63C5DA] text-[25px] ">bag packers </div>
            </div>
            <div className="font-light text-[40px] flex gap-5">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Instagram.svg"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Facebook.svg" alt="Facebook" className="w-10 h-10" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/LinkedIn.svg" alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/X.svg" alt="Twitter" className="w-10 h-10" />
              </a>
            </div>

            <div className="">
              <div className="text-[#FA8128] text-[25px]  ">Contact Us</div>
              <div className="text-[#63C5DA] text-[25px]  ">
                baggagebugs123@gmail.com
              </div>
              <div className="text-[#63C5DA] text-[25px]  ">
                +88 8373746498{" "}
              </div>
            </div>
          </div>
          <div className="section-9-right w-[50%]  text-[32px] text-[#63C5DA] flex flex-col justify-between">
            <div className="">
              <span className="text-[#FA8128] font-bold">Baggage Bugs</span> is
              a collaborative luggage storage network, partnering with trusted
              shops worldwide to provide a secure and convenient solution for
              travelers.
            </div>
            <div className="">
              <span className="text-[#FA8128] font-bold">
                Say goodbye to the hassle
              </span>{" "}
              of carrying heavy bags while exploring a new city.
            </div>
            <div className="">
              Your luggage will always have a
              <span className="text-[#FA8128] font-bold">safe place</span>,
              allowing you to enjoy your journey to the fullest!
            </div>
            <div className="mt-10">
              <button
                onClick={() => {
                  setIsPartner(true);
                }}
                className="bg-[#FA8128] text-white px-3 py-2 rounded-lg shadow-md hover:bg-[#f77a20] transition"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
