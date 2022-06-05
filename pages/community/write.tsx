import type { NextPage } from "next";

const Write: NextPage = () => {
    return (
        <form className="px-4 py-10">
            <textarea
                className="mt-1 w-full shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-gray-300" 
                placeholder="Ask a quetions!"
            ></textarea>
            <button className="w-full bg-orange-500 text-white font-medium text-sm h-10 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-orange-500">Submit</button>
        </form>

    );
};

export default Write;