import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CollectionCard from "../components/CollectionCard";
import CollectionCardOpen from "../components/CollectionCardOpen";
import { selectCollection } from "../redux/collectionSlice";
import ResultCard from "../components/ResultCard";
import CollectionDisplay from "../components/CollectionDisplay";
import { selectDisplay } from "../redux/displaySlice";
import Empty from "../components/Empty";
import PrimaryButton from "../components/PrimaryButton";
import { changeNav } from "../redux/navSlice";

export default function Collection() {
  const dispatch = useDispatch();
  const collection = useSelector(selectCollection);
  const cards = collection.map((x) => <CollectionCard {...x} />);

  return (
    <div className="flex flex-col w-full h-full py-16 gap-4 ">
      {collection.length > 0 ? (
        <>
          <CollectionDisplay />
          <div className="flex flex-col overflow-y-auto ml-1">{cards}</div>
          <div id="buttons" className=" ">
            <PrimaryButton
              text="New Scan"
              action={() => dispatch(changeNav("scan"))}
            />
          </div>
        </>
      ) : (
        <>
          <Empty />
          <PrimaryButton
            text={"New Scan"}
            action={() => dispatch(changeNav("scan"))}
          />
        </>
      )}
    </div>
  );
}
