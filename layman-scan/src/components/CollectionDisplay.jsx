import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/displaySlice";

export default function CollectionDisplay(props) {
  const display = useSelector(selectDisplay);

  return (
    <div className="h-2/5 min-h-52 w-full flex flex-col">
      <div className="bg-white shadow rounded-lg px-1 pt-1 pb-2">
        <div className=" text-gray-800 text-lg border-blue-50 px-3 py-3 font-semibold">
          {display.word}
        </div>
        <div className="pb-2 px-3 text-gray-600">{display.definition}</div>
      </div>
    </div>
  );
}
