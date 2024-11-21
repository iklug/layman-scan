import ResultCards from "../components/ResultCard";
import dummyData from "../data";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import ResultsContainer from "../components/ResultsContainer";
import { changeNav } from "../redux/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectResponse } from "../redux/responseSlice";
export default function Results() {
  const dispatch = useDispatch();
  const responseData = useSelector(selectResponse);

  const renderCards = responseData
    ? responseData.map((x, index) => (
        <ResultCards
          word={x.word}
          definition={x.definition}
          key={`${x.word}-${index}`}
          id={`${x.word}-${index}`}
        />
      ))
    : null;

  return (
    <ResultsContainer>
      {renderCards}
      <div id="buttonContainer" className="flex pt-4 gap-2">
        <PrimaryButton
          text="New Scan"
          action={() => dispatch(changeNav("scan"))}
        />
        <SecondaryButton
          text="View Collection"
          action={() => dispatch(changeNav("collection"))}
        />
      </div>
    </ResultsContainer>
  );
}
