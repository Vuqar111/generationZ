import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../common/actions/userActions";
const Navbar = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <>
      <header className=" bg-[#000]">
        <div className="w-[80%] m-[auto] flex justify-between items-center p-[20px] text-[white]">
          <div className="text-[#31640A] text-[24px]">
            <Link className="brand" to="/">
              Generation Z
            </Link>
          </div>
          <div>
            <ul className="flex items-center justify-between cursor-pointer">
              <Link to="/login">
                <li className="px-[30px]">About</li>
              </Link>
              <Link to="register">
                <li className="px-[30px]">Services</li>
              </Link>
              <Link to="/controlrobot">
                <li className="px-[30px]">Difference</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <div>
              {userInfo ? (
                <div className="flex">
                  <Link to="#">
                    <div className="flex px-[10px]">
                      <div>{userInfo.name}</div>
                    </div>
                  </Link>
                  <ul className="flex justify-between items-center">
                    <li className="px-[10px]">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>

                    <li className="text-[#31640A]">
                      <Link to="#signout" onClick={signoutHandler}>
                        Çıxış et
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login">
                  <div className="row column">
                    <div>Daxil Ol</div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
