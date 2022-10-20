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
        setData(res.data.result[0]);
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
          <div className="flex flex-col  justify-between items-center w-[30rem]">

          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
