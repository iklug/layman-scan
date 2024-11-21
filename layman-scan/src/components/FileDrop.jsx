import handleFileUpload from "../utility/handleFileUpload";
import { useDispatch } from "react-redux";
const FileDrop = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="fileInput">
        <input
          className=" flex w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
          id="fileInput"
          type="file"
          accept="image/*"
          //function that runs when something is uploaded
          onChange={(e) => handleFileUpload(e, dispatch)}
        />
      </label>
    </>
  );
};

export default FileDrop;
