import type { NextPage } from "next";

const Edit: NextPage = () => {
    return (
        <div className="py-10 px-4 space-y-4">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-14 h-14 bg-slate-400 rounded-full" />
                <label className="text-sm bg-gray-100 p-1.5 shadow-sm border border-gray-400 rounded-md" htmlFor="profile">
                    Change
                    <input 
                    accept="image/*"
                    id="profile"
                    className="hidden"
                    type="file" />
                </label>
            </div>

            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
                <input
                id="email"
                className="
              appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500"
                type="email" required />
            </label>
            
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone number
                <div className="flex rounded-md shadow-sm">
                <span className="
                flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
                    +82
                </span>
                <input
                    id="phone"
                    className="
                  appearance-none w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm 
                  placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500"
                    type="number" required />
            </div>
            </label>
            
            <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 py-2 px-4 text-white
          border border-transparent rounded-md shadow-sm text-sm font-medium
          focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
                Update Profile
            </button>
        </div>
    );
};

export default Edit;