import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="mt-8 px-2">
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="flex space-x-2 items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div className="w-1/2 text-sm font-medium p-1 border-gray-400 border rounded-md">Hi how much are you selling them for?</div>
            </div>
            <div className="flex flex-row-reverse space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div className="w-1/2 text-sm font-medium p-1 border-gray-400 border rounded-md">I want ￦20,000</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div className="w-1/2 text-sm font-medium p-1 border-gray-400 border rounded-md">미쳤어</div>
            </div>
          </div>

        ))}
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-1 inset-x-0 px-1">
        <div className="flex items-center space-x-1">
          <input
            className="w-full rounded-full border-gray-300 focus:ring focus:ring-orange-500 focus:border-gray-300"
            type="text" />
          <div className="absolute inset-y-0 flex py-1.4 pr-3 right-0 items-center">
            <span className="bg-orange-500 rounded-full text-white px-1.5 py-1">&rarr;</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChatDetail;