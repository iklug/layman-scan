import { createWorker } from "tesseract.js";
import { addTesseract } from "../redux/tesseractSlice";

const transcribeImage = async (file) => {
  const worker = await createWorker("eng");
  const result = await worker.recognize(file);
  console.log(result.data.text);

  await worker.terminate();
  return result.data.text;
};

export default transcribeImage;
