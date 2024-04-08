import { useEffect, useRef, useState } from "react";
import AddCard from "./AddCard";
import {dropTargetForElements, draggable} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

const Card = ({ info, location }) => {

const [dragging, setDragging] = useState(false);
const ref = useRef(null);


useEffect(()=> {
    const element = ref.current;
    if(!element){
        throw new Error('I am throwing an error');
    }
    return draggable({
        element: element,
        getInitialData: () => ({location, info}),
        onDragStart: () => setDragging(true),
        onDrop: () => setDragging(false),
    });
}, [location]);

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
    <div className={`flex flex-col justify-center py-2`}>
      <a
        href="#"
        onClick={handleClick}
        className={`${dragging && 'opacity-30'} p-6 flex-grow bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col ${
          add ? "bg-blue-200 hover:bg-blue-300" : ""
        } transition-colors duration-100`}
        ref={ref}
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
