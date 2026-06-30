import {useState} from "react";
import {useAuth} from "../../hooks/useAuth.js";
import { useNavigate } from 'react-router';

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const {handleRegister, loading} = useAuth();
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
      e.preventDefault();
      handleRegister({username , email, password});
    }


  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-amber-50 backdrop-blur-lg shadow-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">RB</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="mt-2 text-gray-500">
            Start building your professional AI Resume.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              onChange={(e)=> {setUsername(e.target.value)}}
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              onChange={(e)=> {setEmail(e.target.value)}}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-green-500 py-3 font-semibold text-white shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
            >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin hover:cursor-pointer"></span>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="font-semibold text-cyan-700 hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;