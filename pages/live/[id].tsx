import type { NextPage } from "next";

const Live: NextPage = () => {
    return (
        <div className="py-4 px-2 space-y-3">
            <div className="space-y-2 mb-6">
                <div className="w-full aspect-video bg-slate-300" />
                <div className="text-xl">
                    Let's try potatos
                </div>
            </div>
            <div className="h-[60vh] overflow-y-scroll">
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
            <div className="fixed w-full mx-auto max-w-md bottom-0 inset-x-0 px-1">
                <div className="flex items-center space-x-1">
                    <input
                        className="w-full rounded-full border-gray-300 focus:ring focus:ring-orange-500 focus:border-gray-300"
                        type="text" />
                    <div className="absolute inset-y-0 flex bottom-1 p-4 right-0 items-center">
                        <span className="bg-orange-500 rounded-full text-white p-1">&rarr;</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Live;