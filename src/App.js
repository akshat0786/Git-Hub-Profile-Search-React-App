import React, { useState } from "react";
import axios from "axios";
import Gitlogo from "./images/Gitlogo.png";
import Location from "./images/Location.png";
import Company from "./images/Company.png";

const style = {
  bg: `min-h-[500px] w-screen bg-slate-300`,
  head: `flex justify-center bg-slate-900 p-4 text-white text-center `,
  heading: `pt-1 ml-1 text-xl`,
  container: `flex justify-center p-10`,
  input: `w-100 shadow-lg rounded-md pl-2 placeholder:italic`,
  inputbtn: `bg-slate-900 bg-slate-100 text-white rounded-md py-2 px-4 ml-2  hover:shadow-xl hover:font-bold`,
  profile: `flex flex-col max-h-[500px] max-w-[400px] bg-slate-200 items-center m-auto rounded-md mt-10 shadow-xl hover:shadow-2xl`,
  img: `h-40 w-40 border shadow-xl rounded-full mt-10`,
  username: `text-center pt-5 text-xl`,
  name: `font-bold mt-5 text-3xl`,
  desc: `flex`,
  descLocation: `flex flex-col items-center m-12 p-1`,
  descCompany: `flex flex-col items-center m-12 p-1`,
  companyImg: `h-10 w-10`,
  locationImg: `h-10 w-8`,
  company: `mt-3`,
  location: `mt-3`,
};

function App() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        console.log(value);
        setData(value);
      });
    // axios.get(`https://api.github.com/users/${userName}`).then((value) => {
    //   setData(value)
    //   console.log(value)
    // })
  };
  return (
    <div className={style.bg}>
      <div className={style.head}>
        <img src={Gitlogo} height="10px" width="30px" />
        <h1 className={style.heading}>Github Profile Search Application</h1>
      </div>

      <div className={style.container}>
        <input
          type="text"
          placeholder="enter username"
          value={userName}
          onChange={handleChange}
          className={style.input}
        />
        <button className={style.inputbtn} onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>

      <div className={style.profile}>
        <div>
          <img className={style.img} src={data.avatar_url} />
          <div className={style.username}>@{data.login}</div>
        </div>
        <div className={style.name}>{data.name}</div>

        <div className={style.desc}>
          <div className={style.descCompany}>
            <img className={style.companyImg} src={Company} />
            <div className={style.company}>{data.company}</div>
          </div>

          <div className={style.descLocation}>
            <img className={style.locationImg} src={Location} />
            <div className={style.location}>{data.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
