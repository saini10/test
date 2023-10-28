import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Slide from '@mui/material/Slide';

import Logo from '../Assets/Logo';
import Cross from '../Assets/Cross';
import Mail from '../Assets/Mail';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PrivacyPolicy = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="privacy-policy-id" className='flex flex-col w-full h-full'>
      <div className="Header flex flex-row h-[80px] lg:h-[100px] w-full px-5 py-4 lg:px-20 items-center justify-between bg-[#ffffff]" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06)' }}>
        <a href="/" className=" w-[45%] cursor-pointer">
          <Logo />
        </a>
        <button className="bg-[#20B08F] hover:bg-[#1b967a] text-white text-base font-bold py-[8px] sm:py-[10px] px-[20px] sm:px-[40px] rounded-[8px] sm:rounded-[10px] font-Mulish transition duration-500 ease-in-out hover:scale-105" onClick={handleClickOpen}>Subscribe</button>
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
      <div className="Fold1 flex flex-col h-full lg:max-w-[1090px] px-5 lg:px-20 items-center mt-12 lg:mt-20 m-0 lg:m-auto">
        <h1 className='text-[32px] md:text-[46px] leading-snug md:leading-[57px] text-center lg:text-right font-bold font-Mulish text-[#333333]'>Privacy Policy</h1>
        <p className='text-[16px] md:text-[18px] leading-[27px] text-center lg:text-right font-normal font-Mulish'>Effective Date: 2023-01-01</p>
        <div className='flex flex-col justify-center align-top pt-[53px] pb-[60px] max-w-[930px] mx-auto'>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>Escape Planner Pvt. Ltd (“us”, “we”, or “our”) operates Escapekar.com (hereinafter referred to as “Service”).<br />
            Our Privacy Policy governs your visit to Escapekar.com, and explains how we collect, safeguard and disclose information that results from your use of our Service.<br />
            We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy.<br />
            If you have any questions regarding this Privacy Policy, please send us an email at <a href="mailto:admin@escapekar.com" className="text-[#59B1E6] underline">admin@escapekar.com</a></p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Types of Data Collected</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>We collect several different types of information for various purposes to provide and improve our service to you.</p>

          <h4 className='font-Mulish text-[20px] leading-[25px] font-semibold self-start mt-[24px] mb-[8px]'>1. Personal Data</h4>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:<br />
            0.1. Email address<br />
            0.2. First name and last name<br />
            0.3. Phone number<br />
            0.4. Address, Country, State, Province, ZIP/Postal code, City<br />
            0.5. Cookies and Usage Data<br />
            We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by mailing us at  <a href="mailto:admin@escapekar.com" className="text-[#59B1E6] underline">admin@escapekar.com</a></p>

          <h4 className='font-Mulish text-[20px] leading-[25px] font-semibold self-start mt-[24px] mb-[8px]'>2. Usage Data</h4>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“Usage Data”).<br />
            This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.<br />
            When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>

          <h4 className='font-Mulish text-[20px] leading-[25px] font-semibold self-start mt-[24px] mb-[8px]'>3. Location Data</h4>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>We may use and store information about your location if you give us permission to do so (“Location Data”). We use this data to provide features of our Service, to improve and customize our Service.<br />
            You can enable or disable location services when you use our Service at any time by way of your device settings.</p>

          <h4 className='font-Mulish text-[20px] leading-[25px] font-semibold self-start mt-[24px] mb-[8px]'>4.Tracking Cookies Data</h4>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.<br />
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.<br />
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Use Of Data</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>Escape Planner Pvt. Ltd uses the collected data for various purposes:<br />
            0.1. to provide and maintain our Service;<br />
            0.2. to notify you about changes to our Service;<br />
            0.3. to allow you to participate in interactive features of our Service when you choose to do so;<br />
            0.4. to provide customer support;<br />
            0.5. to gather analysis or valuable information so that we can improve our Service;<br />
            0.6. to monitor the usage of our Service;<br />
            0.7. to detect, prevent and address technical issues;<br />
            0.8. to fulfil any other purpose for which you provide it;<br />
            0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us;<br />
            0.10. to provide you with notices about your account deletion, email-instructions, etc.;<br />
            0.11. to provide you with news, special offers and general information about other goods, services and events ;<br />
            0.12. in any other way we may describe when you provide the information;<br />
            0.13. for any other purpose with your consent.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Security Of Data</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>Escapekar takes the protection of your Customer Data seriously but, unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Customer Data, we cannot guarantee the security of your Customer Data transmitted through any channel, such as the Website; any transmission is at your own risk.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Delete Your Data</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>To delete your account and associated user data, you may sign in to our app and visit Accounts page, which includes a "Delete Account" button. Our system will fully delete your account within two weeks of receiving the request.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Third Party Advertisers</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>We may use third-party Service Providers to show advertisements to you to help support and maintain our Service. Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.<br />
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>General Data Protection Regulation (GDPR)</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.<br />
            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.<br />
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at admin@escapekar.com.<br />
            In certain circumstances, you have the following data protection rights:<br />
            <b>0.1. the right to access-</b> update or to delete the information we have on you;<br />
            <b>0.2. the right of rectification-</b> You have the right to have your information rectified if that information is inaccurate or incomplete;<br />
            <b>0.3. the right to object-</b> You have the right to object to our processing of your Personal Data;<br />
            <b>0.4. the right of restriction-</b> You have the right to request that we restrict the processing of your personal information;<br />
            <b>0.5. the right to data portability-</b> You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;<br />
            <b>0.6. the right to withdraw consent-</b> You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;<br />
            Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.<br />
            You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Children’s Privacy</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br />
            Escapekar does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Changes to This Privacy Policy</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>We reserve the right, at our sole discretion, to revise, change or modify this Privacy Policy from time to time and such modifications shall be binding on only upon your acceptance. Therefore, we urge you to review the Privacy Policy periodically to ensure that you agree with our latest information on our privacy practices.</p>

          <h3 className='font-Mulish text-[24px] leading-[23px] font-semibold self-start mt-[24px] mb-[8px]'>Contact Us</h3>
          <p className='font-Mulish text-[16px] leading-[27px] font-normal tracking-[0.323px] text-[#323232]'>If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:admin@escapekar.com" className="text-[#59B1E6] underline">admin@escapekar.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;