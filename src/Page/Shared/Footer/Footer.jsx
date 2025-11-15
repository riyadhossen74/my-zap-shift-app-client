import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../Logo/Logo";

const Footer = () => {
    return (
        <footer className="bg-[#0B0B0B] rounded-4xl text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-5 gap-10 text-center space-y-4">

        {/* Left Section */}
        <div>
            <div className="flex  items-center justify-center text-white">
            <Logo></Logo>
         
            </div>
          <p className="mt-3 text-sm mx-auto max-w-[730px] leading-7">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
        <ul className="md:flex items-center justify-center gap-6 font-semibold ">
            <li>Services</li>
            <li>Coverage</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className=" flex flex-col items-center">
          
          <div className="flex items-center gap-5 text-xl">

            <a 
              href="#" 
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin />
            </a>

            <a 
              href="#" 
              className="hover:text-emerald-400 transition"
            >
              <FaXTwitter />
            </a>

            <a 
              href="#" 
              className="hover:text-emerald-400 transition"
            >
              <FaFacebook />
            </a>

            <a 
              href="#" 
              className="hover:text-emerald-400 transition"
            >
              <FaYoutube />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} ZapShift — All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;