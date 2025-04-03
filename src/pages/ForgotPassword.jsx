import React, { useState } from 'react';
import { MdEmail} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleGetOtp = () => {
    // TODO: Add authentication logic here
    console.log('get Otp');
    navigate('/verify-otp');
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className=" h-[70%] flex w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden">

        {/* ............................................Left Panel.................................... */}
        <div className="h-full w-1/2 bg-white px-12 py-20 flex flex-col justify-center">
          <div className="flex justify-center mb-7">
            <img src="/src/assets/images/fitquestLogo1.png" alt="FitQuest Logo" className="h-20 " />
          </div>
          <div className='mb-5 px-7'>
            <h3 className="text-xl font-semibold mb-2 text-gray-500">Forgot Password</h3>
            <p className='text-sm text-gray-400'>Enter your email to receive a verification code.</p>
          </div>

          <div className="space-y-4 w-full max-w-md mx-auto">

            {/* Email Field */}
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
              <MdEmail className="text-gray-500 mr-2 text-xl" />
              <input
                type='email'
                placeholder="Email Address"
                className="flex-1 outline-none bg-transparent"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            

            {/* Get Code Button*/}
            <button className='w-full rounded-xl h-8' style={{backgroundColor : "#6B6DFE", color : 'white' }} onClick={()=>handleGetOtp()}>Get Code</button>


          </div>
        </div>
        {/* ............................................image on Right.................................... */}
        <div className="h-full  w-1/2 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl relative overflow-hidden">
          <img
            src='/src/assets/images/muscled-women.png'
            className="absolute bottom-0 right-0 h-full object-cover"
            alt="fitness"
          />
          <div className="absolute bottom-0 bg-white/20 backdrop-blur-lg m-8 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-white">Transform Your Fitness, One Step at a Time!</h4>
            <p className="text-sm text-white mt-2">
              Track workouts, join challenges, earn rewards, and achieve your fitness goals effortlessly.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
