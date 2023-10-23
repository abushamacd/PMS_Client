"use client";

import Link from "next/link";
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

  const signup = (e: any) => {
    e.preventDefault();
    const { userName, email, password, image, confirmPassword } = inputData;
    const formData = new FormData();
    if (password !== confirmPassword) {
      alert(`Password is not match`);
      return;
    }

    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", image);
    console.log(formData);

    setInputData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    });
  };

  return (
    <>
      <div
        className={`box  bg-[#1D2434] h-[600px] before:h-[600px] after:h-[600px]`}
      >
        <div className={`content  bg-[#1D2434]`}>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-1 text-xl font-medium text-center">Sign Up</h3>
            <div className="form flex flex-col">
              <form onSubmit={signup} className="space-y-6 flex flex-col">
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
                  <i className="bg-[#00EBE7]"></i>
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
                  <i className="bg-[#00EBE7]"></i>
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
                  <i className="bg-[#00EBE7]"></i>
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
                  <i className="bg-[#00EBE7]"></i>
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
                      className={`cursor-pointer bg-[#111528] border border-[#00EBE7] px-4 py-2 rounded-lg`}
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
                  <i className="bg-[#00EBE7]"></i>
                </div>
                <div className="links flex justify-between">
                  <Link href={`/reset`}>Forgot Password ?</Link>
                  <Link href={`/signin`}>Sign In</Link>
                </div>
                <input
                  className={`text-[#1D2434] px-4 py-2 rounded-lg mx-auto bg-[#00EBE7]`}
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
