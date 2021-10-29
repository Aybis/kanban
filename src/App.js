import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  ClipboardListIcon,
  ClockIcon,
  HashtagIcon,
  HomeIcon,
  ServerIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React from 'react';

const App = () => {
  return (
    <div className="relative min-h-screen h-full bg-warmGray-100 bg-stripes bg-stripes-white">
      {/* Header Mobile */}
      <div className="flex justify-between px-6 inset-x-0 pt-6">
        <div className="flex gap-4">
          <div className="h-14 w-14 rounded-lg bg-white"></div>
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold text-gray-800">
              Abdul Muchtar Astria
            </h1>
            <p className="text-xs font-light text-gray-600">
              Friday, 29 Oct 2021
            </p>
          </div>
        </div>
        <div>
          <BellIcon className="h-8 w-8 p-1 bg-white rounded-md text-gray-300" />
        </div>
      </div>
      {/* End Header Mobile */}

      {/* Menu Mobile  */}

      <div className="fixed flex justify-evenly bottom-0 px-3 py-3 inset-x-0 bg-white z-40">
        <div>
          <HomeIcon className="h-8 w-8 p-2 rounded-lg text-orange-500 bg-orange-50" />
        </div>
        <div>
          <ClipboardListIcon className="h-8 w-8 p-2 rounded-lg text-orange-500 bg-orange-50" />
        </div>
        <div>
          <ChartBarIcon className="h-8 w-8 p-2 rounded-lg text-orange-500 bg-orange-50" />
        </div>
        <div>
          <UserIcon className="h-8 w-8 p-2 rounded-lg text-orange-500 bg-orange-50" />
        </div>
      </div>

      {/* End Menu Mobile */}

      {/* Content */}
      <div className="relative px-6 my-4 mt-8 pb-16">
        {/* task report */}
        <div className="relative my-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Task Done */}
            <div className="flex gap-4 col-span-2 bg-green-100 bg-opacity-70 p-4 rounded-lg">
              <div className="bg-white p-2 rounded-lg flex justify-center items-center">
                <h1 className="text-2xl font-bold text-gray-800">20</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-medium text-gray-800">
                  Task Done this Week
                </h1>
                <div className="flex items-center mt-1">
                  <h2 className="font-medium text-green-600 text-sm">4</h2>
                  <ArrowUpIcon className="text-green-600 h-3" />
                  <p className="text-gray-400 font-light text-sm ml-1">
                    Task Today
                  </p>
                </div>
              </div>
            </div>
            {/* Task Done */}
            {/* Task Progress  */}
            <div className="flex flex-col justify-between bg-white rounded-lg p-4">
              <div className="">
                <ServerIcon className="h-10 text-gray-400 bg-warmGray-100 rounded-lg p-2" />
              </div>

              <div className="flex justify-between mt-6">
                <h1 className="text-gray-400">To do</h1>
                <h1 className="font-semibold text-gray-800">10</h1>
              </div>
            </div>
            {/* Task Progress  */}
            {/* Task Pending */}
            <div className="flex flex-col justify-between bg-white rounded-lg p-4">
              <div className="">
                <ClockIcon className="h-10 text-gray-400 bg-warmGray-100 rounded-lg p-2" />
              </div>

              <div className="flex justify-between mt-6">
                <h1 className="text-gray-400">Pending</h1>
                <h1 className="font-semibold text-gray-800">10</h1>
              </div>
            </div>
            {/* End Task Pending */}
            {/* Task Urgent */}
            <div className="relative col-span-2">
              <div className="relative bg-orange-200 bg-opacity-70 rounded-lg p-4 pb-14">
                <h1 className="font-bold text-gray-800 text-center text-xl">
                  Your Most Urgent Task
                </h1>
              </div>
              <div className="bg-white rounded-lg mx-6 -mt-10 z-10 relative shadow-lg p-4">
                <div className="flex flex-col">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <UserGroupIcon className="h-6 text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-gray-800 text-sm">
                        Meeting Team
                      </p>
                      <p className="font-light text-gray-600 text-xs">
                        19.20 PM
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <ul className="list-disc list-inside text-xs font-light text-gray-400 ml-4">
                      <li>Menentukan masalah</li>
                      <li>Membuat solusi</li>
                      <li>Link zoom ...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Task Urgetn */}
          </div>
        </div>
        {/* task report */}

        {/* card */}
        <div className="relative my-4 mt-8">
          <h1 className="font-semibold text-gray-800">Activity Today</h1>

          <div className="flex flex-col justify-center gap-4 mt-4">
            {Array.from({ length: 5 }).map((index) => (
              <div
                key={Math.random()}
                className="flex p-4 gap-4 rounded-lg bg-white">
                <div className="rounded-lg bg-yellow-100 p-2">
                  <HashtagIcon className="text-yellow-500 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-semibold text-gray-800">
                    Membuat Use Case Scenario
                  </h1>
                  <p className="text-xs font-light text-gray-400">
                    Revision & Discuss
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-xs text-gray-400 font-light">11.20 AM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end card */}
      </div>
      {/* End Content */}
    </div>
  );
};

export default App;
