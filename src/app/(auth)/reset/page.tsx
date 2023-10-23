import Link from "next/link";
import React from "react";

const Reset = () => {
  return (
    <>
      <div
        className={`box  bg-[#1D2434] h-[320px] before:h-[320px] after:h-[320px]`}
      >
        <div className={`content  bg-[#1D2434]`}>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-center">
              Forget Password
            </h3>
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

                <div className="links flex justify-between">
                  <Link href={`/signin`}>Sign In</Link>
                  <Link href={`/signup`}>Sign Up</Link>
                </div>
                <input
                  className={`text-[#1D2434] w-24 px-4 py-2 rounded-lg mx-auto bg-[#00EBE7]`}
                  type="submit"
                  value="Reset"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
