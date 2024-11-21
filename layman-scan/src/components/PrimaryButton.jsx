import { useDispatch } from "react-redux";

const PrimaryButton = ({ text, action }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="rounded-md w-full text-center bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={action}
    >
      {text}
    </div>
  );
};

export default PrimaryButton;
