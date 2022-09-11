import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="w-[90%] m-[auto] text-[white] mt-[50px]">
        <h2 className="text-center text-[40px]">
          OUR <br /> PROJECTS
        </h2>
        <div className="flex justify-between mt-[50px]">
          <div className="text-right w-[40%] pr-[50px]">
            <h2 className="text-[32px]">
              Bay Area <br /> Solar Farm
            </h2>
            <div className="pt-[50px]">
              <div className="pt-[15px]">
                <h2 className="text-[#31640A] text-[24px]">96 MW</h2>
                <p>Capacity</p>
              </div>

              <div className="mt-[10px] pt-[15px]">
                <h2 className="text-[#31640A] text-[24px]">96 MW</h2>
                <p>Total Area</p>
              </div>

              <div className="mt-[10px] pt-[15px]">
                <h2 className="text-[#31640A] text-[24px]">96 MW</h2>
                <p>Your Built</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[450px]">
            <img
              className="w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-between mt-[50px]">
          <div className="w-[100%] h-[450px]">
            <img
              className="w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="text-left w-[40%] pl-[50px]">
            <h2 className="text-[32px]">
              Green Forest <br /> Station
            </h2>
            <div className="pt-[50px]">
              <div className="pt-[15px]">
                <h2 className="text-[#31640A] text-[24px]">96 MW</h2>
                <p>Capacity</p>
              </div>

              <div className="mt-[10px] pt-[15px]">
                <h2 className="text-[#31640A] text-[24px]">96 MW</h2>
                <p>Total Area</p>
              </div>

              <div className="mt-[10px] pt-[15px]">
                <h2 className="text-[#31640A] text-[24px]">96 MW</h2>
                <p>Your Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
