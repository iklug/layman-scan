import { PlusIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWord, deleteWord } from "../redux/collectionSlice";
import { selectCollection } from "../redux/collectionSlice";
export default function PlusButton({ word }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const styles = active
    ? "rounded-full bg-indigo-500 p-1 text-indigo-100  shadow-sm"
    : "rounded-full bg-gray-50 p-1 text-gray-500  shadow-sm";
  const collection = useSelector(selectCollection);
  console.log(collection);
  return (
    <button type="button" className={styles} onClick={() => setActive(!active)}>
      {active ? (
        <CheckIcon
          aria-hidden="true"
          className="size-4"
          onClick={() => dispatch(deleteWord(word.id))}
        />
      ) : (
        <PlusIcon
          aria-hidden="true"
          className="size-4"
          onClick={() => dispatch(addWord(word))}
          aria-label="add to collection"
        />
      )}
    </button>
  );
}
