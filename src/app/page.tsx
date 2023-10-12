/** @format */

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="px-6 pb-20">
          <div className="text-left text-md mb-0 py-6">
            <span className="uppercase text-xs text-gray-500">dashboard</span>
            <h3 className="page-title text-4xl font-semibold">
              User Dashboard
            </h3>
          </div>
          <div className="flex flex-col bg-white rounded-2xl  shadow-md">
            <div className="border-b p-4">
              <span className="text-md font-medium">Active Users</span>
            </div>
            <div className="p-4 border-b w-full">
              <div className="grid grid-cols-12 gap-4 text-left">
                <div className="col-span-1 font-semibold">#</div>
                <div className="col-span-2 font-semibold">First Name</div>
                <div className="col-span-2 font-semibold">Last Name</div>
                <div className="col-span-2 font-semibold">Country</div>
                <div className="col-span-2 font-semibold">Address</div>
                <div className="col-span-2 font-semibold">Phone</div>
                <div className="col-span-1 font-semibold">Action</div>
              </div>
            </div>
            <div className="p-4 border-b w-full ">
              <div className="grid grid-cols-12 gap-4 text-left">
                <div className="col-span-1 font-normal">1</div>
                <div className="col-span-2 font-normal truncate">Ali</div>
                <div className="col-span-2 font-normal truncate">Kerry</div>
                <div className="col-span-2 font-normal truncate">
                  Russian Federation
                </div>
                <div className="col-span-2 font-normal truncate">
                  Gdańsk Gdańsk Gdańsk Gdańsk
                </div>
                <div className="col-span-2 font-normal truncate">107-0339</div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
            <div className="p-4 border-b w-full ">
              <div className="grid grid-cols-12 gap-4 text-left">
                <div className="col-span-1 font-normal">2</div>
                <div className="col-span-2 font-normal truncate">Ali</div>
                <div className="col-span-2 font-normal truncate">Kerry</div>
                <div className="col-span-2 font-normal truncate">
                  Russian Federation
                </div>
                <div className="col-span-2 font-normal truncate">
                  Gdańsk Gdańsk Gdańsk Gdańsk
                </div>
                <div className="col-span-2 font-normal truncate">107-0339</div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
