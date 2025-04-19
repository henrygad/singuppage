// A simple Sign up page
// Design for local, Goodle auth, and Apple auth sign up

import sideImage from "./assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
import googleIcon from "./assets/icons8-google 1.png";
import appleIcon from "./assets/icons8-apple-logo 1.png";

const App = () => {
  return <div className="w-full min-h-screen flex flex-wrap gap-4 bg-white overflow-hidden">
    {/* sign up form section */}
    <section className="flex-1 flex justify-center items-center pt-10">
      <div className="space-y-16">
        <h2 className="font-text text-3xl font-bold">Get Started Now</h2>
        {/* sign up local form */}
        <form className="space-y-6">
          {/* client name */}
          <label
            htmlFor="your-name"
            className="flex flex-col gap-1"
          >
            <h3 className="font-text text-base font-medium">Name</h3>
            <input
              id="your-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="true"
              className="font-text text-sm text-slate-600 font-medium min-w-[280px] sm:min-w-[320px] md:min-w-[420px]  outline-none border rounded-lg px-3 py-2"
            />
          </label>
          {/* client email address */}
          <label
            htmlFor="your-email-address"
            className="flex flex-col gap-1"
          >
            <h3 className="font-text text-base font-medium">Email address</h3>
            <input
              id="your-email-address"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="true"
              className="font-text text-sm text-slate-600 font-medium min-w-[280px] sm:min-w-[320px] md:min-w-[420px]  outline-none border rounded-lg px-3 py-2"
            />
          </label>
          {/* client password */}
          <label
            htmlFor="your-password"
            className="flex flex-col gap-1"
          >
            <h3 className="font-text text-base font-medium">Password</h3>
            <input
              id="your-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="true"
              className="font-text text-sm text-slate-600 font-medium min-w-[280px] sm:min-w-[320px] md:min-w-[420px] outline-none border rounded-lg px-3 py-2"
            />
          </label>
          {/* agree to the terms & policy */}
          <label
            htmlFor="terms-policy"
            className="flex items-center gap-2"
          >
            <input
              type="checkbox"
              id="terms-policy"
              className="outline-none border rounded-lg border-gray-300 focus:ring-blue-500 cursor-pointer"
            />
            <p className="font-text text-sm font-medium">I agree to the terms & policy</p>
          </label>
          {/* sign up btn */}
          <span className="block">
            <button
              className="font-text font-bold text-base text-white w-full bg-[#3A5B22] py-1 rounded-lg "
            >Signup</button>
          </span>
        </form>
        {/* sing up other options */}
        <div>
          {/* line space divider */}
          <span className="flex justify-between items-center gap-2 font-text text-xs font-medium mb-16">
            <span className="flex-1 border rounded-lg"></span> Or <span className="flex-1 border rounded-lg"></span>
          </span>
          {/* google and apple sign up login btn */}
          <span className="flex justify-center items-center gap-2 mb-5">
            <button
              className="flex-1 flex justify-center items-center gap-2 p-1 border rounded-lg cursor-pointer"
            >
              <img
                src={googleIcon}
                alt="google icon"
                className="h-5 w-5 object-contain"
              />
              <span className="font-text text-xs font-medium text-nowrap" >Sign in with Google</span>
            </button>
            <button
              className="flex-1 flex justify-center items-center gap-2 p-1 border rounded-lg cursor-pointer"
            >
              <img
                src={appleIcon}
                alt="apple icon"
                className="h-5 w-5 object-contain"
              />
              <span className="font-text text-xs font-medium text-nowrap">Sign in with Apple</span>
            </button>
          </span>
          {/* option to sign in */}
          <span className="flex justify-center items-center gap-2 font-text text-sm font-medium text-nowrap">
            Have an account?  <button className="text-blue-800 cursor-pointer">Sign In</button>
          </span>
        </div>
      </div>
    </section>
    {/* Display sign up image */}
    <section className="w-full md:flex-1 flex justify-center md:justify-end">
      <img
        src={sideImage}
        alt="sing-up side image"
        className="w-auto max-h-[480px] md:max-h-screen sm:h-auto object-cover"
      />
    </section>
  </div>;
};

export default App;
