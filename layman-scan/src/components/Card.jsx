import { useState } from "react";
import AddCard from "./AddCard";

const Card = ({ info }) => {
  console.log(info);
  const splitInfo = info.split(":");
  const noStars = splitInfo[0]
    .split("")
    .filter((char) => char !== "*")
    .join("");

  const [add, setAdd] = useState(false);
  const [addMessage, setAddMessage] = useState('');


  const handleClick = () => {
    if(add){
        setAdd(!add);
        return;
    }
    setAdd(!add);
    setAddMessage('added to collection');

    setTimeout(()=>setAddMessage(''), 1000);
  }

  return (
    <div className="flex flex-col justify-center flex-grow py-2 items-center">
      {/* <div className="font-bold bg-gray-50 px-4 rounded-lg text-gray-700">{noStars}:</div>
            <div className=" w-56 flex-grow">{splitInfo[1]}</div>
            <div className=" w-56 flex-grow"></div> */}
      <a
        href="#"
        onClick={handleClick}
        className={`max-w-sm p-6 w-56 flex-grow bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col ${
          add ? "bg-blue-200 hover:bg-blue-300" : ""
        } transition-colors duration-100`}
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {noStars}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {splitInfo[1]}
        </p>
        <p className="text-xs text-blue-700 -mb-2 mt-2 transition-all duration-100">{addMessage}</p>
      </a>
    </div>
  );
};

export default Card;
