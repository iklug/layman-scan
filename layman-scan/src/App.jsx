import { useState, CSSProperties } from "react";
import Page from "./pages/Page";
import Title from "./components/Title";
import FileDrop from "./components/FileDrop";
import Button from "./components/Button";
import Results from "./pages/Results";
import Error from "./components/Error";
import DotLoader from 'react-spinners/DotLoader';

function App() {

  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0])
    console.log('handleFileUpload running');
  }

  console.log('this is the uploaded file',selectedFile);

  const submitFile = async() => {
    if(!selectedFile){
      setError('please upload file');
      return
    }
    const formData = new FormData;
    formData.append('image', selectedFile);
    setLoading(true);

    try {
      const request = await fetch('http://localhost:3000/image', {
        method: 'POST',
        body: formData,
      });
      if(!request.ok){
        throw new Error('that did not work though @ submitFile');
      }
      const data = await request.json();
      console.log('data received', data);
      const splitData = data.split('@');

      setResult(splitData.slice(1)
      );
    } catch (error) {
      console.error(error);
      setError('there was an error @ submitFile, bottom part');
    }
  }

  const override = {
    display: 'absolute',
    top: '12px',
  }

  return (
    <>
      <Page>
        {result && <Results handleClick={()=>setResult(null)} result={result}/>}
        <Title/>
        <FileDrop handleFileUpload={handleFileUpload} />
        <Button handleClick={submitFile} title={'Start Scan'}/>
        <Error errorText={error}/>
        {/* {loading && <DotLoader color={"#5C80BC"} cssOverride={override}  />} */}
        {loading && <div className="fixed mt-48">Scanning file.. {`(this can take a moment)`}</div>}
      </Page>
    </>
  );
}

export default App;
