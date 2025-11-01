import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [userData, setuserData] = useState([]);
  const getDate = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setuserData(response.data);
  
  };
  useEffect(() => {
    getDate();
  }, []);
  let printUserData = "No User Found";
  if (userData.length > 0) {
    printUserData = userData.map((user) => (
      <a href={user.url} target="_blank">
        <div key={user.id} className="p-4 h-40 w-40  ">
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
    <div className="bg-black text-white h-FULL ">
      <div className=" flex flex-wrap gap-3">{printUserData}</div>
    </div>
  );
};

export default App;
