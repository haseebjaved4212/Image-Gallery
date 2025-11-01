import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getDate = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setuserData(response.data);
  };
  useEffect(() => {
    getDate();
  }, [index]);
  let printUserData = (
    <h2 className="text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      Loading...
    </h2>
  );
  if (userData.length > 0) {
    printUserData = userData.map((user) => (
      <a href={user.url} target="_blank">
        <div
          key={user.id}
          className="p-4 h-60 w-60  rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out "
        >
          <img
            src={user.download_url}
            alt={user.author}
            className="rounded  overflow-hidden w-full h-full object-cover "
          />
          <p className="text-center text-white">{user.author}</p>
        </div>
      </a>
    ));
  }

  return (
    <div className="bg-black text-white min-h-screen p-2   ">
      
      <div className=" flex flex-wrap gap-3">{printUserData}</div>

      <div className="flex justify-center items-center gap-3 mt-12 my-4">
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
        <h2>Page {index}</h2>
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
