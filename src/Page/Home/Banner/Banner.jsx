import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
       autoPlay={true} infiniteLoop={true} 
      showThumbs={false} showStatus={false} showArrows={false}>
        {/* Slide 1 */}
        <div className="relative">
          <img src={bannerImg1} alt="banner1" />
          
          {/* Buttons overlay */}
          <div className="absolute grid  top-138 -left-5 transform -translate-y-1/2  gap-4">
          
             <p className="w-[600px] leading-5">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
          
           <div className="flex items-center justify-center">
             <button className="bg-primary text-[#1F1F1F] px-4 py-2 rounded-md  transition mr-7 hover:bg-amber-400">
             Track Your Parcel
            </button>
             <BsArrowUpRightCircleFill className="relative right-7"  size={40} />
            <button className=" border border-gray-700 px-4 py-2 rounded-md  transition hover:bg-amber-400">
             Be A Rider
            </button>
           </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <img src={bannerImg2} alt="banner2" />
        </div>

        {/* Slide 3 */}
        <div>
          <img src={bannerImg3} alt="banner3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
