import Title from "../components/Title";
import FileDrop from "../components/FileDrop";
import PrimaryButton from "../components/PrimaryButton";
import ErrorBadge from "../components/ErrorBadge";
import { useDispatch, useSelector } from "react-redux";
import { selectFile } from "../redux/fileSlice";
import { selectError } from "../redux/errorSlice";
import handleFileSubmission from "../utility/handleFileSubmission";
import transcribeImage from "../utility/transcribeImage";
import SecondaryButton from "../components/SecondaryButton";
import { changeNav } from "../redux/navSlice";

export default function Scan() {
  const selectedFile = useSelector(selectFile);
  const selectedError = useSelector(selectError);
  const dispatch = useDispatch();
  return (
    <>
      <Title></Title>
      <FileDrop />
      <PrimaryButton
        text="Scan File"
        action={() => handleFileSubmission(dispatch, selectedFile)}
      />
      <SecondaryButton
        text="View Collection"
        action={() => dispatch(changeNav("collection"))}
      />
      {selectedError && <ErrorBadge text={selectedError} />}
    </>
  );
}
