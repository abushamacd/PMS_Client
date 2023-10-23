"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/images/logo.png";
import CustomHead from "@/component/UI/CustomHead";
import { SetStateAction, useState } from "react";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [loadImage, setLoadImage] = useState("");
  //   const [postUser, { isLoading, isSuccess, isError, data, reset }] =
  //     usePostUserMutation();

  //   if (data?.data?.message) {
  //     toast(`${data.data.message}`);
  //   }
  //   if (isSuccess && !data?.data?.message) {
  //     toast(`Dear ${data.data.userName}, Welcome to TextFlow`);
  //   }

  const inputHandle = (e: any) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const fileHandle = (e: any) => {
    if (e.target.files.length !== 0) {
      setInputData({
        ...inputData,
        [e.target.name]: e.target.files[0],
      });
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result as SetStateAction<string>);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const register = (e: any) => {
    e.preventDefault();
    const { userName, email, password, image, confirmPassword } = inputData;
    const formData = new FormData();
    if (password !== confirmPassword) {
      //   toast.error(`Password is not match`);
      return;
    }

    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", image);

    // postUser(formData);
    // if (isSuccess) {
    setInputData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    });
    // }
  };

  return (
    <>
      <CustomHead title="Sign Up" />
      <div
        className={`flex justify-evenly items-center h-screen	 bg-main-dark-bg text-custom_color`}
      >
        <div className="logo">
          <Image width={200} height={200} alt="logo" src={logo} />
        </div>
        <div
          className={`box  bg-secondary-dark-bg h-[600px] before:h-[600px] after:h-[600px]`}
        >
          <div className={`content  bg-secondary-dark-bg`}>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-1 text-xl font-medium text-center">Sign Up</h3>
              <div className="form flex flex-col">
                <form onSubmit={register} className="space-y-6 flex flex-col">
                  <div className={`inputBox`}>
                    <input
                      className={``}
                      type="text"
                      name="userName"
                      id="userName"
                      required
                      value={inputData.userName}
                      onChange={inputHandle}
                    />
                    <span className={``}>Username</span>
                    <i className="bg-custom_bg"></i>
                  </div>{" "}
                  <div className={`inputBox `}>
                    <input
                      className={``}
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={inputData.email}
                      onChange={inputHandle}
                    />
                    <span className={``}>Email</span>
                    <i className="bg-custom_bg"></i>
                  </div>
                  <div className={`inputBox `}>
                    <input
                      className={``}
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={inputData.password}
                      onChange={inputHandle}
                    />
                    <span className={``}>Password</span>
                    <i className="bg-custom_bg"></i>
                  </div>
                  <div className={`inputBox `}>
                    <input
                      className={``}
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                      value={inputData.confirmPassword}
                      onChange={inputHandle}
                    />
                    <span className={``}>Confirm Password</span>
                    <i className="bg-custom_bg"></i>
                  </div>
                  <div className={`inputBox  flex justify-around pb-2`}>
                    <div
                      className={`image w-[50px] h-[50px] rounded-full border overflow-hidden`}
                    >
                      {loadImage ? (
                        <img
                          className={`w-full h-full object-cover `}
                          src={loadImage}
                          alt="userPhoto"
                        />
                      ) : (
                        <img
                          className={`w-full h-full object-cover`}
                          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                          alt="userPhoto"
                        />
                      )}
                    </div>
                    <div
                      className={`file flex flex-col justify-center items-center`}
                    >
                      <label
                        className={`cursor-pointer bg-main-dark-bg px-4 py-2 rounded-lg`}
                        htmlFor="image"
                      >
                        Upload Image
                      </label>
                      <input
                        className={`hidden`}
                        type="file"
                        id="image"
                        name="image"
                        onChange={fileHandle}
                      />
                    </div>
                    <i className="bg-custom_bg"></i>
                  </div>
                  <div className="links flex justify-between">
                    <Link href={`/auth/reset`}>Forgot Password ?</Link>
                    <Link href={`/auth/login`}>Sign In</Link>
                  </div>
                  <input
                    className={`text-[#1D2434] px-4 py-2 rounded-lg mx-auto bg-custom_bg`}
                    type="submit"
                    value="Sign Up"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
