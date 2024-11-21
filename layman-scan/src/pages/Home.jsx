import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Title from "../components/Title";
import { useDispatch } from "react-redux";
import { changeNav } from "../redux/navSlice";
import formatResponse from "../utility/formatResponse";
export default function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Title />
      <PrimaryButton
        text="New Scan"
        action={() => dispatch(changeNav("scan"))}
      />
      <SecondaryButton
        text="View Collection"
        action={() => dispatch(changeNav("collection"))}
      />
    </>
  );
}
