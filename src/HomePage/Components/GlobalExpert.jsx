import Expert1 from "../../assets/Images/expert 10.jpg";
import Expert2 from "../../assets/Images/expert2.jpg";
import Expert3 from "../../assets/Images/expert 3.jpg";
import Expert4 from "../../assets/Images/expert4.jpg";
import Expert5 from "../../assets/Images/expert 5.jpg";
import Expert6 from "../../assets/Images/expert6.jpg";
import Expert7 from "../../assets/Images/expert 11.jpg";
import Expert8 from "../../assets/Images/expert8.jpg";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function GlobalExpert() {
  return (
    <div className="bg-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-blue-800 text-lg font-medium bg-gray-100 inline-block py-2 px-3 rounded-lg">
            Team Mates
          </h4>
          <h1 className="text-4xl lg:text-5xl font-bold mt-2">
            Meet Our Global Experts
          </h1>
        </div>
        <Slider {...settings} >
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert1}
                alt="Liam Miller  - Chief Advisor"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Chief Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Liam Miller </h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert2}
                alt="Olivia Williams - Growth Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Growth Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Olivia Williams</h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert3}
                alt="Emma Johnson - Chief Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Chief Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Emma Johnson</h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert4}
                alt="Noah Wilson - Chief Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Growth Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Noah Wilson</h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert5}
                alt="James Moore - Chief Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Chief Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">James Moore</h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert6}
                alt="Sophia Brown - Growth Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Growth Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Sophia Brown</h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert7}
                alt="Elijah Taylor - Chief Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Chief Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Elijah Taylor</h3>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Expert8}
                alt="Ava Davis - Chief Advisor"
                className="w-full  h-96  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-sm font-medium text-gray-300">Growth Advisor</span>
                <h3 className="text-lg font-semibold text-white mt-2">Ava Davis </h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default GlobalExpert;
