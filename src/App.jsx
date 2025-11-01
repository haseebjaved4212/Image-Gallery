import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getDate = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=8`
    );
    setuserData(response.data);
  };
  useEffect(() => {
    getDate();
  }, [index]);
  let printUserData = (
    <div className="w-full flex items-center justify-center py-24">
      <h2 className="text-center text-white">Loading...</h2>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map((user) => (
      <a
        key={user.id}
        href={user.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src={user.download_url}
            alt={user.author}
            className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
          />
          <p className="text-center text-sm text-gray-300 py-2">
            {user.author}
          </p>
        </div>
      </a>
    ));
  }

  return (
    <div className="bg-black text-white min-h-screen p-2   ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {printUserData}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 my-4">
        <button
          style={{ opacity: index <= 1 ? 0.5 : 1 }}
          className="bg-amber-500 p-2 rounded active:scale-95 text-white cursor-pointer"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setuserData([]);
            }
          }}
        >
          Prev
        </button>
        <h2 className="py-1">Page {index}</h2>
        <button
          className="bg-amber-500 p-2 rounded active:scale-95 text-white cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
            setuserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
