import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-[90%] m-[auto] text-[white] mt-[70px]">
        <h2 className="text-[46px]">About</h2>
        <div className="w-[100%] flex justify-between mt-[30px]">
          <div className="w-[50%]">
            <img
              className="w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/6238608/pexels-photo-6238608.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="w-[50%] text-[white] ml-[20px] mt-[80px]">
            <h2 className="text-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className="opacity-[0.6] pt-[15px]">
              Lorem ipsum dolo, consectetur adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Lorem ipsum dolo,
              consectetur adipiscing elit. adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. adipiscing elit. Lorem ipsum
              doloectetur adipiscing elit.
              <br/>
              consectetur adipiscing elit. adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. adipiscing elit. Lorem ipsum
              doloectetur adipiscing elit.
              <br/>
              consectetur adipiscing elit. adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. adipiscing elit. Lorem ipsum
              doloectetur adipiscing elit.
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
