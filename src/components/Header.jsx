import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Header = () => {
  const [data, setData] = useState(null);

  const getApi = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bos">
        {data ? (
          <div className="flex flex-col  justify-between items-center w-[30rem] h-[30rem] mx-auto text-center bg-blue-300 p-4">
            <img
              className="rounded-full w-[9rem]"
              src={data.picture.medium}
              alt="data.name.first"
            />
            <p className="flex items-center text-3xl">
              <MdDriveFileRenameOutline className="text-2xl mr-3" />
              {data.name.title}. {data.name.first} {data.name.last}
            </p>
            <p className="flex items-center ">
              <AiTwotoneMail className="text-2xl mr-3" />
              {data.email}
            </p>
            <p className="flex items-center">
              <AiFillPhone className="text-2xl mr-3" />
              {data.phone}
            </p>
            <p className="flex items-center">
              <BiCurrentLocation className="text-2xl mr-3" />
              {data.location.city}-{data.location.country}
            </p>
            <p>Age: {data.dob.age}</p>
            <p>Register Date: {data.registered.date.slice(0, 10)}</p>
          </div>
        ) : (
          "404 Not Found - Error"
        )}
      </div>
      <button
        className="bg-blue-500 p-1 rounded-lg text-white hover:bg-green-400 hover:text-black mt-5"
        onClick={() => getApi()}
      >
        Random User
      </button>
    </div>
  );
};

export default Header;
