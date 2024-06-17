import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Community</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaYoutube className="-mt-1" />
                <span className="text-[15px] ml-[6px]">Youtube</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Social Media</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaInstagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaTwitter />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaLinkedin />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">About</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">+324 86 67 95 04</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Leer meer over mij</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">ariolajashari@hotmail.com</span>
              </p>
            </div>
          </div>

          <div className="mb-[20px] text-[15px] text-center">
            &copy; Ariola 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
  );
};

export default Footer;
