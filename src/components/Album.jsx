import album from "../assets/images/album.png";
import { useEffect, useState } from "react";
const Album = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzJ7cNS-_ZHTPJfSSz3nSSDN_ztcfcBfqV7dkEj6m61mtMuvGthtgaksbi5sPtnpmmV/exec",
    )
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <section className="px-6">
      <div className="flex items-center justify-between h-14 mt-5">
        <p className="font-ephesis text-[32px] mb-0"> Album hình cưới</p>
        <div className="w-1/2 h-28 overflow-hidden relative">
          <img
            src={album}
            alt="Album"
            className="absolute inset-0 w-[510px] h-full max-w-none object-cover object-center"
          />
        </div>
      </div>
      <div className="bg-green-800 grid grid-cols-2 gap-3 p-3">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.name}
            className="w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default Album;
