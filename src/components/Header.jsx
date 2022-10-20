import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState(null);

  const getApi = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res);
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
        {data && (
          <div className="flex flex-col  justify-between items-center w-[30rem] h-[30rem] mx-auto text-center bg-blue-300 p-4">
            <img
              className="rounded-full w-[9rem]"
              src={data.picture.medium}
              alt="data.name.first"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
