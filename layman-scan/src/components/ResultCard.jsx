import PlusButton from "../components/PlusButton";

const ResultCard = (props) => {
  return (
    <div className="w-full flex flex-col bg-white shadow divide-y divide-gray-200">
      <div
        id="word"
        className="px-4 py-2 text-gray-700 font-semibold flex justify-between"
      >
        <div>{props.word} </div>
        <PlusButton word={props} />
      </div>
      <div id="definition" className="px-4 py-6 text-gray-500">
        {props.definition}
      </div>
    </div>
  );
};

export default ResultCard;
