import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex h-full">
        {/* Left Section (Login Form) */}
        <div className="w-full lg:w-2/6  bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center p-8">
          <div className="w-full bg-black/50 p-8 rounded-xl shadow-xl backdrop-blur-xl text-white space-y-6">
            <h2 className="text-3xl font-semibold text-center">Login</h2>

            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:w-4/6 hidden lg:block  bg-cover blur-2xl bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/abstract-colorful-wavy-modern-background-vibrant-visual-symphony_956920-26152.jpg")' }}>
        </div>
      </div>
    </div>
  );
};

export default Login;
