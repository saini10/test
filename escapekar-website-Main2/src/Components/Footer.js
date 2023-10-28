
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../Assets/Logo';
import Apple from '../Assets/AppleIcon.png';
import Android from '../Assets/PlayStore.png';

const Footer = () => {

  return (
    <>
      <div className="Footer flex flex-col h-full lg:h-[298px] w-full justify-between bg-[#FAFAFA] border-t border-t-[#F1F1F1]">
        <div className='flex flex-col lg:flex-row h-full items-center justify-center lg:justify-between  px-[80px] pt-10 lg:pt-0'>
          <div className='hidden lg:flex flex-col items-start justify-start w-auto lg:w-[45%]'>
            <a href="/" className="w-[70%] cursor-pointer">
              <Logo />
            </a>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between w-auto lg:w-[55%]'>
            <div className='flex flex-col items-center lg:items-start mt-[0px] lg:mt-0 gap-[24px] lg:gap-[20px]'>
              <p className='hidden lg:flex text-[18px] font-bold leading-[28px] font-Mulish mb-1 lg:mb-0'>Quick Links</p>
              <Link to="/terms-of-use" className=' text-[16px] md:text-2xl lg:text-base font-normal font-Mulish text-[#999999] hover:text-[#333333] mb-1 lg:mb-0'>Terms Of Use</Link>
              <Link to="/privacy-policy/#privacy-policy-id" className=' text-[16px] md:text-2xl lg:text-base font-normal font-Mulish text-[#999999] hover:text-[#333333] mb-1 lg:mb-0'>Privacy Policy</Link>
            </div>
            <div className='flex flex-col items-center lg:items-start justify-end mt-[24px] lg:mt-0 mb-[28px] pt-[20px] lg:pt-0 border-t lg:border-t-0 border-t-[#F1F1F1]'>
              <p className='text-[18px] font-bold leading-[28px] font-Mulish mb-[16px] lg:mb-[24px]'>Download App</p>
              <div className="flex flex-row items-center gap-[10px]">
                <a alt="Play Store" rel="noreferrer" target='_blank' href="https://play.google.com/store/apps/details?id=com.escapekar.escapekar">
                  <div className='flex flex-row h-[42px] w-[128px] md:h-[48px] md:w-[160px] bg-[#000000] rounded-[10px] cursor-pointer justify-center transition duration-500 ease-in-out hover:scale-105'>
                    <img alt="Google play" src={Android} className='my-2' />
                    <div className='flex flex-col items-start justify-center ml-[4px] md:ml-[10px] py-1 md:py-3'>
                      <p className=' text-[8px] font-bold font-Mulish text-[#ffffff]'>GET IT ON</p>
                      <p className=' text-xs md:text-base font-semibold font-Mulish text-[#ffffff]'>Google Play</p>
                    </div>
                  </div>
                </a>
                <a alt="App Store" rel="noreferrer" target='_blank' href="https://apps.apple.com/in/app/escapekar-trip-planner/id6446503558">
                  <div className='flex flex-row h-[42px] w-[128px] md:h-[48px] md:w-[160px] bg-[#000000] rounded-[10px] cursor-pointer justify-center transition duration-500 ease-in-out hover:scale-105'>
                    <img alt="App Store" src={Apple} className='my-1' width="20%" />
                    <div className='flex flex-col items-start justify-center ml-[4px] md:ml-[10px] py-1 md:py-3'>
                      <p className=' text-[8px] font-bold font-Mulish text-[#ffffff]'>DOWNLOAD ON THE</p>
                      <p className=' text-xs md:text-base font-semibold font-Mulish text-[#ffffff]'>App Store</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center h-full lg:h-[60px] border-t border-t-[#F1F1F1] px-[20px] md:px-[80px]'>
          <p className=' text-[12px] md:text-xs text-center lg:text-left font-normal font-Mulish text-[#999999] mb-5 lg:mb-0 mt-5 lg:mt-0'>© 2022 Escape Planner Pvt Ltd. All rights reserved</p>
          <div className='socialLinks flex flex-row items-center justify-end mb-[24px] lg:mb-0 gap-[22px]'>
            <InstagramIcon alt="Instagram" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer transition duration-500 ease-in-out hover:scale-105' />
            <FacebookIcon alt="Facebook" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer transition duration-500 ease-in-out hover:scale-105' />
            <LinkedInIcon alt="LinkedIn" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer transition duration-500 ease-in-out hover:scale-105' />
            <TwitterIcon alt="Twitter" width="18px" className='text-[#CCCCCC] hover:text-[#919191] cursor-pointer transition duration-500 ease-in-out hover:scale-105' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;