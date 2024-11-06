import { BiRefresh } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative">
        <img src='/bg3.png' alt='bg-image' className="w-full h-full object-cover absolute top-0 left-0" />

        {/* Register Form Container */}
        <div className="flex items-center justify-center h-full relative z-10">
          <div className="p-8 rounded-lg shadow-lg max-w-xl w-full border-[2px] border-zinc-500">
            <h1 className="text-white text-3xl flex items-center justify-center mb-3"><BiRefresh /></h1>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>

            <form>
              <div className="mb-4">
                <label className="block text-white font-semibold mb-2" htmlFor="name">Name</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    id="middle-name"
                    className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
                    placeholder="Middle Name"
                  />
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white font-semibold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter your email" />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="mb-6 w-full">
                  <label className="block text-white font-semibold mb-2" htmlFor="password">Password</label>
                  <input type="password" id="password" className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter your password" />
                </div>
                <div className="mb-6 w-full">
                  <label className="block text-white font-semibold mb-2" htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Confirm your password" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="mb-6 w-full">
                  <label className="block text-white font-semibold mb-2" htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" className="w-full px-4 py-2 border border-zinc-500 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 text-zinc-400" />
                </div>
                <div className="mb-6 w-full">
                  <label className="block text-white font-semibold mb-2" htmlFor="mob">Contact Number</label>
                  <input type="number" id="mob" className="w-full px-4 py-2 border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter WhatsApp number" />
                </div>
              </div>

              <button type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-blue-600 transition duration-200 mb-4">Register</button>

              <div className="flex justify-center w-full">
                <button className="text-white w-full bg-transparent rounded-full hover:bg-red-600 border-[1px] py-2 border-zinc-500 flex justify-center transition duration-200 gap-2">
                  <FcGoogle className="w-6 h-6" />Continue with Google
                </button>
              </div>

              <p className="text-white text-center mt-6">Already have an account? <Link to="/signin" className="text-blue-500 hover:text-blue-600">Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
