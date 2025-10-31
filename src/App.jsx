import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      setImages(response.data);
    };
    fetchImages();
  }, []);

  return (
    <div className="bg-black text-white h-screen ">
      <h1>Hello World!</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
