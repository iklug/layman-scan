import { useState, useEffect, useRef } from "react";
import Page from "./pages/Page";
import Title from "./components/Title";
import FileDrop from "./components/FileDrop";
import Button from "./components/Button";
import Results from "./pages/Results";
import Error from "./components/Error";
import DotLoader from 'react-spinners/DotLoader';
import SubmitScan from "./components/SubmitScan";
import ResultContainer from "./components/ResultContainer";
import DragBox from "./components/DragBox";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

function App() {

  const [result, setResult] = useState(null);
  const [collection, setCollection] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [viewFileInput, setViewFileInput] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('the results',result);
  useEffect(()=> {

    return monitorForElements({
      onDrop({source, location}) {
        const destination = location.current.dropTargets[0];
        if(!destination){
          return;
        }
        console.log('destination', destination);
        const destinationLocation = destination.data.location;
        
        const sourceLocation = source.data.location;
        const sourceDefinition = source.data.info;



        // const updatedLocations = result.reduce(((acc, item) => {
        //   if(item.word !== sourceDefinition){
        //     acc.push(item);
        //   } 
        //   return acc;
        // }
        // ),[])

        const updatedLocations = result.filter(item => item.word !== sourceDefinition);
        console.log(destinationLocation, sourceLocation, sourceDefinition, updatedLocations);
        // const word = result.find(item=> item.word === sourceDefinition );
        // const restOfWords = result.filter(item => item.word !== )
        setResult(updatedLocations);
        setCollection(prev => [{word: sourceDefinition, location: destinationLocation}, ...prev]);
      }
    })
    

  }, [result, collection])

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0])
  }


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
      const splitData = data.split('@');
      const reformatAgain = splitData.slice(1).map(item => { return {word: item, location:'bank'}});
      setResult(reformatAgain
      );
    } catch (error) {
      console.error(error);
      setError('there was an error @ submitFile, bottom part');
    }
  }

  return (
    <>
      <Page>
        {result && 
          <ResultContainer>
            <Results handleClick={()=>setResult(null)} result={result}/>
            <DragBox location={'collection'} cards={collection}/>
          </ResultContainer>}
        <Title/>
          <SubmitScan handleFileUpload={handleFileUpload} submitFile={submitFile} />
          <Error errorText={error}/>
          {loading && <div className="fixed mt-48">Scanning file.. {`(this can take a moment)`}</div>}
      </Page>
    </>
  );
}

export default App;
