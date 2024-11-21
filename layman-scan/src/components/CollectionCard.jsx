import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDisplay } from "../redux/displaySlice";

export default function CollectionCard(props) {
  const dispatch = useDispatch();

  return (
    <div className="flex" onClick={() => dispatch(addDisplay(props))}>
      <div className="w-full border-b py-2 pl-2 pr-1 flex justify-between text-gray-700 bg-white">
        <div className="text-gray-700">{props.word}</div>
        <div className="" id="ellipsis">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
