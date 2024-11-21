import { addFile } from "../redux/fileSlice";

const handleFileUpload = (e, dispatch) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      dispatch(addFile(result));
      console.log("successfully added base64 string to redux");
    };
    reader.readAsDataURL(file);
  }
};

export default handleFileUpload;
