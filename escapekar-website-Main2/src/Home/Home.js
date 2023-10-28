
import React, { useRef, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from '../Assets/Logo';
import Cross from '../Assets/Cross';
import Mail from '../Assets/Mail';
import TravelGraphic from '../Assets/TravelGraphic';
import Map from '../Assets/Map.png';
import Subscribe from '../Assets/SubscribeGraphic.png';
import Travel2 from '../Assets/Montreal.png';
import Travel1 from '../Assets/Salar.png';
import Travel4 from '../Assets/Sunken.png';
import Travel3 from '../Assets/WarmUpWarm.png';
import Apple from '../Assets/AppleIcon.png';
import Android from '../Assets/PlayStore.png';
import AllAtOnePlace from '../Assets/AllAtOnePlace.svg';
import BestRecommendations from '../Assets/BestRecommendations.svg';
import OptimiseRoute from '../Assets/OptimiseRoute.svg';
import HotAirBalloon from '../Assets/HotAirBalloon.svg'
import Compass from '../Assets/Compass.svg'
import Compass2 from '../Assets/Compass2.svg'
import DirectionBoard from '../Assets/DirectionBoard.svg'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const [open, setOpen] = React.useState(false);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const el1 = imgRef1.current;
    const el2 = imgRef2.current;
    const el3 = imgRef3.current;
    gsap.fromTo(el1, { rotation: -50 }, {
      rotation: 0, duration: 4, scrollTrigger: {
        trigger: el1
      }
    })
    gsap.fromTo(el2, { rotation: -20 }, {
      rotation: 0, duration: 4, scrollTrigger: {
        trigger: el2
      }
    })
    gsap.fromTo(el3, { rotation: -50 }, {
      rotation: 0, duration: 4, scrollTrigger: {
        trigger: el3
      }
    })
  }, [])


  return (
    <>
      <div className="Home flex flex-col min-h-screen h-full w-full justify-between bg-gradient-to-b from-[#E2FFF8] to-[#f1f1f1] ">
        <div className="Header flex flex-row justify-center md:justify-between items-center px-5 sm:px-10 lg:px-20 pt-[26px] pb-[26px] sm:pt-9 sm:pb-0 bg-[#fff] sm:bg-transparent">
          <a href="/" className="w-[45%] md:w-full cursor-pointer self-center m-0">
            <Logo />
          </a>
          <button className="bg-[#20B08F] hidden md:flex hover:bg-[#1b967a] text-white text-base font-bold py-[8px] sm:py-[10px] px-[20px] sm:px-[40px] rounded-[8px] sm:rounded-[10px] font-Mulish transition duration-500 ease-in-out hover:scale-105" onClick={handleClickOpen}>Subscribe</button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className='relative !pb-[6px]'><p className=' text-2xl text-center lg:text-left font-semibold font-Mulish mt-3'>{"Subscribe"}</p>
              <Cross onClick={() => setOpen(false)} />
            </DialogTitle>
            <DialogContent>
              <p className='text-sm lg:text-base text-center lg:text-left font-normal font-Mulish mb-8' id="alert-dialog-slide-description">
                Let's get connected for more enhanced experience
              </p>
              {/* <input className='flex text-base font-Mulish py-[12px] w-full outline-none bg-[#f6f6f6] px-2 border-default rounded-[8px]' placeholder='Enter your email address' /> */}
              <TextField
                placeholder='Enter your email address'
                id="outlined-start-adornment"
                variant='outlined'
                className="flex text-base font-Mulish py-[12px] w-full outline-none bg-[#f6f6f6] px-2 border-0 rounded-[8px]"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Mail /></InputAdornment>,
                }}
              />
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
              <button className="bg-[#20B08F] hover:bg-[#1b967a] text-white text-base font-bold py-[10px] sm:py-[10px] px-[20px] sm:px-[40px] rounded-[8px] sm:rounded-[10px] font-Mulish mb-3">Subscribe</button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="MainTag flex flex-col lg:flex-row items-center pb-[30px] lg:pb-[67px] px-5 sm:px-10 lg:px-20">
          <div className="HomeText flex flex-col items-center lg:items-start w-[100%] lg:w-[50%] mt-12 lg:mt-[0]">
            <h1 className="text-[26px] leading-[36px] md:leading-[70px] md:text-[56px] font-bold max-w-[581px] lg:max-w-none mb-5 font-Mulish text-center md:text-left">Let’s explore, create and manage trip <span className="lg:block text-red-500">for free</span></h1>
            <p className=" text-base md:text-2xl lg:text-base font-normal max-w-[533px] mb-10 font-Mulish text-[#00000080] text-center md:text-left">For many people organising trip is a headache, we made it easy for you plus we won’t charge you for that</p>
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
          <div className="flex flex-col items-center lg:items-end lg:justify-center w-[100%] lg:w-[50%] mt-14 lg:mt-4">
            <TravelGraphic />
          </div>
        </div>
      </div>
      <div className="Fold2 relative flex flex-col min-h-screen md:min-h-fit lg:min-h-screen h-full w-full px-5 lg:px-20 items-center pb-16 md:pb-20 lg:pb-[140px]">
        <img ref={imgRef1} src={Compass2} alt="Compass" className='hidden lg:flex absolute top-[0%] -right-[6%]' />
        <h2 className='text-[24px] lg:text-[46px] font-bold font-Mulish mt-16 lg:mt-20'>What We Got For You</h2>
        <p className='text-base md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish mt-2 lg:mt-0 lg:mb-20 text-[#00000080]'>Enjoy different experiences in every place you visit</p>
        <div className='Cards flex flex-wrap flex-col justify-center md:flex-row gap-5 md:gap-3 lg:gap-5 pt-12 lg:pt-0'>
          <div className='Card flex flex-row md:flex-col h-auto w-[350px] md:w-[320px] lg:h-[540px] lg:w-[360px] items-center justify-end rounded-[10px] md:rounded-[30px] bg-[#ffffff]'>
            <div className='flex flex-col justify-center items-center h-[160px] md:h-[320px] lg:h-[360px] w-[50%] md:w-[320px] lg:w-[360px] bg-[#FEF4E2] rounded-tl-[10px] rounded-bl-[10px] md:rounded-t-[30px] md:rounded-bl-[0px] p-3 lg:p-0'>
              <img src={AllAtOnePlace} alt="All At One Place" />
            </div>
            <div className='flex flex-col w-[50%] md:w-[320px] lg:w-auto min-h-[160px] lg:min-h-auto justify-center items-center px-[12px] md:px-[32px] m-auto'>
              <p className=' text-base md:text-xl lg:text-2xl font-bold font-Mulish text-center mt-0 md:mt-[18px] mb-[10px]'>All At One Place</p>
              <p className='text-xs md:text-base font-medium leading-[20px] font-Mulish text-[#323232] text-center pb-0 md:pb-[50px]'>Get your flight, hotel, reservations etc all at one place</p>
            </div>
          </div>
          <div className='Card flex flex-row md:flex-col h-auto w-[350px] md:w-[320px] lg:h-[540px] lg:w-[360px] items-center justify-end rounded-[10px] md:rounded-[30px] bg-[#ffffff]'>
            <div className='flex flex-col justify-center items-center h-[160px] md:h-[320px] lg:h-[360px] w-[50%] md:w-[320px] lg:w-[360px] bg-[#F3E9FF] rounded-tl-[10px] rounded-bl-[10px] md:rounded-t-[30px] md:rounded-bl-[0px] p-3 lg:p-0'>
              <img src={BestRecommendations} alt="Best Recommendations" />
            </div>
            <div className='flex flex-col w-[50%] md:w-[320px] lg:w-auto min-h-[160px] lg:min-h-auto justify-center items-center px-[12px] md:px-[32px] m-auto'>
              <p className=' text-base md:text-xl lg:text-2xl font-bold font-Mulish text-center mt-0 md:mt-[18px] mb-[10px]'>Best Recommendations</p>
              <p className='text-xs md:text-base font-medium leading-[20px] font-Mulish text-[#323232] text-center pb-0 md:pb-[50px]'>Personalised suggestions for your trip, find hidden places & many more</p>
            </div>
          </div>
          <div className='Card flex flex-row md:flex-col h-auto w-[350px] md:w-[320px] lg:h-[540px] lg:w-[360px] items-center justify-end rounded-[10px] md:rounded-[30px] bg-[#ffffff] z-10'>
            <div className='flex flex-col justify-center items-center h-[160px] md:h-[320px] lg:h-[360px] w-[50%] md:w-[320px] lg:w-[360px] bg-[#E9F7F4] rounded-tl-[10px] rounded-bl-[10px] md:rounded-t-[30px] md:rounded-bl-[0px] p-3 lg:p-0'>
              <img src={OptimiseRoute} alt="Optimise Route" />
            </div>
            <div className='flex flex-col w-[50%] md:w-[320px] lg:w-auto min-h-[160px] lg:min-h-auto justify-center items-center px-[12px] md:px-[32px] m-auto'>
              <p className=' text-base md:text-xl lg:text-2xl font-bold font-Mulish text-center mt-0 md:mt-[18px] mb-[10px]'>Optimise Your Route</p>
              <p className='text-xs md:text-base font-medium leading-[20px] font-Mulish text-[#323232] text-center pb-0 md:pb-[50px]'>Find the shortest route for your trip while saving your time & money.</p>
            </div>
          </div>
        </div>
      </div >
      <div className="Fold3 relative flex flex-col h-full lg:min-h-[800px] w-full px-5 lg:px-20 items-center bg-[#105847] pb-16 md:pb-20 lg:pb-5">
        <img ref={imgRef2} src={HotAirBalloon} alt="Hot Air Balloon" className='hidden lg:flex absolute -top-[12%] left-[2%]' />
        <h2 className=' text-[24px] lg:text-[46px] font-bold font-Mulish mt-16 lg:mt-20 text-[#ffffff]'>Look for hidden spots</h2>
        <p className='text-base md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish mt-2 lg:mt-0 mb-28 lg:mb-28 text-[#ffffff80]'>All the hidden spots will be on your finger tips</p>
        <div className='Cards flex flex-row gap-10 md:gap-16 lg:gap-28 flex-wrap lg:flex-initial justify-center'>
          <div className='Card flex flex-col h-[145px] w-[110px] md:h-[290px] md:w-[220px] items-center justify-end rounded-[20px] -mt-6 ml-5 lg:ml-0 lg:mt-24'>
            <img alt="Scene" src={Travel1} className=" mb-5" />
            <p className='text-sm md:text-base font-bold font-Mulish text-[#ffffff] whitespace-nowrap'>Salar de Uyuni</p>
            <p className='text-xs md:text-base font-semibold font-Mulish text-[#ffffff80] whitespace-nowrap'>Bolivia</p>
          </div>
          <div className='Card flex flex-col h-[145px] w-[110px] md:h-[290px] md:w-[220px] items-center justify-end rounded-[20px] mt-24 lg:mt-0 mr-5 lg:mr-0'>
            <img alt="Scene" src={Travel2} className=" mb-5" />
            <p className='text-sm md:text-base font-bold font-Mulish text-[#ffffff] whitespace-nowrap'>Montreal Garden</p>
            <p className='text-xs md:text-base font-semibold font-Mulish text-[#ffffff80] whitespace-nowrap'>Canada</p>
          </div>
          <div className='Card flex flex-col h-[145px] w-[110px] md:h-[290px] md:w-[220px] items-center justify-end rounded-[20px] -mt-6 ml-5 lg:ml-0 lg:mt-24'>
            <img alt="Scene" src={Travel3} className=" mb-5" />
            <p className='text-sm md:text-base font-bold font-Mulish text-[#ffffff] whitespace-nowrap'>Wrap Up Warm</p>
            <p className='text-xs md:text-base font-semibold font-Mulish text-[#ffffff80] whitespace-nowrap'>Bolivia</p>
          </div>
          <div className='Card flex flex-col h-[145px] w-[110px] md:h-[290px] md:w-[220px] items-center justify-end rounded-[20px] mt-24 lg:mt-0 mr-5 lg:mr-0'>
            <img alt="Scene" src={Travel4} className=" mb-5" />
            <p className='text-sm md:text-base font-bold font-Mulish text-[#ffffff] whitespace-nowrap'>Sunken Cave</p>
            <p className='text-xs md:text-base font-semibold font-Mulish text-[#ffffff80] whitespace-nowrap'>Yucatan, Mexico</p>
          </div>
        </div>
      </div>
      <div className="Fold4 relative flex flex-col h-full w-full items-center pb-0 md:pb-20 lg:pb-0 bg-[#fff]">
        <img ref={imgRef3} src={Compass} alt="Compass" className='hidden lg:flex absolute w-[113px] h-[123.24px] -top-[9%] left-[45%]' />
        <h2 className=' text-[24px] lg:text-[46px] font-bold font-Mulish mt-16 lg:mt-20 px-5 lg:px-20'>Across the World</h2>
        <p className='text-base md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish mt-2 lg:mt-0 mb-9 lg:mb-20 text-[#00000080] px-5 lg:px-20'>Enjoy different experiences in every place you visit</p>
        <div alt="Map" style={{
          backgroundImage: `url(${Map})`
        }} className="flex md:hidden w-full h-[400px] bg-center bg-cover" />
        <img alt="Map" src={Map} className="w-[80%] hidden md:flex" />
      </div>
      <div className="Fold5 relative flex flex-col h-full w-full px-0 md:px-20 items-center pb-[0] md:pb-[100px] bg-[#fff]">
        <img src={DirectionBoard} alt="Direction Board" className='hidden lg:flex absolute bottom-[23%] left-[30%]' />
        <div className='flex flex-col lg:flex-row h-full w-full md:w-[600px] lg:h-[344px] lg:w-[1000px] px-[20px] lg:px-[110px] pt-[60px] pb-[80px] lg:pt-[40px] lg:pb-[40px] bg-[#F9E5C8] rounded-none md:rounded-[68px]'>
          <img alt="Subscribe" src={Subscribe} className='w-[100%] md-[50%] lg:w-[50%] ml-5 lg:ml-0 my-5 lg:my-0 z-[10]' />
          <div className='flex flex-col items-center justify-center'>
            <p className=' text-base lg:text-xl font-semibold font-Mulish text-center mt-8 md:mt-0 mb-8'>Subscribe to get travel updates and other interesting offers about Escapekar.</p>
            <form className='flex flex-row'>
              <input type="email" className='flex text-base text-left font-Mulish px-[16px] py-[12px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[0px] rounded-br-[0px] w-[230px] lg:w-[328px] outline-none placeholder:text-[#ccc] placeholder:text-sm' placeholder='Enter your email address' />
              <button className='flex text-base font-semibold justify-center font-Mulish px-[24px] py-[12px] rounded-tr-[10px] rounded-br-[10px] rounded-tl-[0px] rounded-bl-[0px] text-[#ffffff] bg-[#20B08F] hover:bg-[#1b967a]'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;