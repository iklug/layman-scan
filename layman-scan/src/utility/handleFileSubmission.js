import { addError } from "../redux/errorSlice";
import transcribeImage from "./transcribeImage";
import { changeNav } from "../redux/navSlice";
import formatResponse from "./formatResponse";
import { addResponse } from "../redux/responseSlice";

const handleFileSubmission = async (dispatch, file) => {
  if (!file) {
    dispatch(addError("No file uploaded"));
    return;
  }
  try {
    dispatch(changeNav("loading"));
    const transcription = await transcribeImage(file);

    const request = await fetch("https://megabackend.fly.dev/laymanscan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file: transcription }),
    });
    if (!request.ok) {
      throw new Error("bad request @ handleFileSubmission");
    }
    const data = await request.json();
    const formattedData = formatResponse(data);
    dispatch(addResponse(formattedData));
  } catch (error) {
    console.error(error);
  }
  dispatch(changeNav("results"));
};

export default handleFileSubmission;
