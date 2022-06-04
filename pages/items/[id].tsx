import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div>
      <div className="mt-2 mx-2 mb-6">
      <div
            className="h-80 w-full bg-gray-300"
          />
        <div className="flex items-center border-b-2 py-2">
          <div
            className="h-14 w-14 bg-gray-300 rounded-full"
          />
          <div className="mx-2 text-sm">
            <p className=" font-bold">Steve Jebs</p>
            <p>View profile &rarr;</p>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Galaxy S50</h1>
          <p className="text-xl font-medium">$140</p>
          <p className="text-base my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex mt-2 justify-between space-x-2">
            <button className="w-full bg-orange-500 text-white font-medium text-sm h-10 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-orange-500">Talk to seller</button>
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full bg-slate-300 b"/>
              <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
              <p className="text-sm font-medium text-gray-700">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;