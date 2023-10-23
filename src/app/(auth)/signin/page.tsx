import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div
        className={`box bg-[#1D2434] h-[420px] before:h-[420px] after:h-[420px]`}
      >
        <div className={`content bg-[#1D2434]`}>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-center">Sign In</h3>
            <div className="form flex flex-col">
              <form className="space-y-6 flex flex-col">
                <div className={`inputBox`}>
                  <input
                    className={``}
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                  <span className={``}>Email</span>
                  <i className="bg-[#00EBE7]"></i>
                </div>
                <div className={`inputBox`}>
                  <input
                    className={``}
                    type="text"
                    name="password"
                    id="password"
                    required
                  />
                  <span className={``}>Password</span>
                  <i className="bg-[#00EBE7]"></i>
                </div>
                <div className="links flex justify-between">
                  <Link href={`/reset`}>Forgot Password ?</Link>
                  <Link href={`/signup`}>Sign Up</Link>
                </div>
                <input
                  className={`text-[#1D2434] px-4 py-2 rounded-lg mx-auto bg-[#00EBE7]`}
                  type="submit"
                  value="Sign In"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
