// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./css/styles.css"; // Your custom styles

// const sliderImages = [
//   "https://picsum.photos/id/1015/1600/900",
//   "https://picsum.photos/id/1020/1600/900",
//   "https://picsum.photos/id/1035/1600/900",
// ];

// const App = () => {
//   return (
//     <div className="container">
//       {/* Background Image Slider */}
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         navigation
//         pagination={{ clickable: true }}
//         className="background-slider"
//       >
//         {sliderImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="slide"
//               style={{ backgroundImage: `url(${image})` }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">theobroma</div>
//         <ul className="nav-links">
//           <li>ABOUT US</li>
//           <li>PRODUCTS</li>
//           <li>SPECIALITY CAKES</li>
//           <li>FIND US</li>
//           <li>CONTACT US</li>
//         </ul>
//         <div className="nav-right">
//           <input type="text" placeholder="Search" className="search-bar" />
//           <button className="order-button">ORDER ONLINE</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero">
//         <div className="hero-text">
//           <h1>A taste of savoury heaven!</h1>
//           <p>CHOOSE FROM OUR RANGE OF SANDWICHES & SAVOURIES.</p>
//           <button className="know-more">KNOW MORE</button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/styles.css"; // Your custom styles
import AuthenticRecipes from "./components/AuthenticRecipes";

const sliderImages = [
  "https://picsum.photos/id/1015/1600/900",
  "https://picsum.photos/id/1020/1600/900",
  "https://picsum.photos/id/1035/1600/900",
];

const App = () => {
  return (
    <div className="container">
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // navigation
        pagination={{ clickable: true }}
        className="background-slider"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">theobroma</div>
        <ul className="nav-links">
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>SPECIALITY CAKES</li>
          <li>FIND US</li>
          <li>CONTACT US</li>
        </ul>
        <div className="nav-right">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="order-button">ORDER ONLINE</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>A taste of savoury heaven!</h1>
          <p>CHOOSE FROM OUR RANGE OF SANDWICHES & SAVOURIES.</p>
          <button className="know-more">KNOW MORE</button>
        </div>
      </header>
            <AuthenticRecipes />
    </div>
  );
};

export default App;
