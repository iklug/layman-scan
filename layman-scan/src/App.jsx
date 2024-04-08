import { useState, useEffect, useRef } from "react";
import Page from "./pages/Page";
import Title from "./components/Title";
import Results from "./pages/Results";
import Error from "./components/Error";
import DotLoader from 'react-spinners/DotLoader';
import SubmitScan from "./components/SubmitScan";
import ResultContainer from "./components/ResultContainer";
import DragBox from "./components/DragBox";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import CollectionContainer from "./pages/CollectionContainer";
import CardSmallCont from "./components/CardSmallCont";
import CardFull from "./components/CardFull";

function App() {

  const [result, setResult] = useState(null);
  const [collection, setCollection] = useState([]);
  const [fullCollection, setFullCollection] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [viewFileInput, setViewFileInput] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedWord, setSelectedWord] = useState('');
  const [viewCollection, setViewCollection] = useState(false);
  

  useEffect(()=>{
    const fullCollection = localStorage.getItem('collection');

    if(fullCollection){
      setFullCollection(JSON.parse(fullCollection));
    }

    }, []);

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
        const updatedLocations = result.filter(item => item.word !== sourceDefinition);
        console.log(destinationLocation, sourceLocation, sourceDefinition, updatedLocations);
        const draggedItem = {word: sourceDefinition, location: destinationLocation};
        setResult(updatedLocations);
        setCollection(prev => [draggedItem, ...prev]);
        setFullCollection(prev => [draggedItem, ...prev]);
        localStorage.setItem('collection', JSON.stringify([draggedItem, ...fullCollection]));
      }
    })
    

  }, [result, collection])

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const deleteWord = (word) => {
    const newCollection = fullCollection.filter(item => item.word !== word);
    setFullCollection(newCollection);
    localStorage.setItem('collection', JSON.stringify(newCollection));
    setSelectedWord('');
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
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('there was an error @ submitFile, bottom part');
    }
  }

  return (
    <>
      <Page>
        {result && 
          <ResultContainer close={()=>setResult(null)} viewCollection={()=>setViewCollection(true)}>
            <Results handleClick={()=>setResult(null)} result={result}/>
            <DragBox location={'collection'} cards={collection}/>
          </ResultContainer>}
          {/* <CollectionContainer/> */}
         {viewCollection && <CollectionContainer>
            <CardSmallCont handleClick={(word)=>setSelectedWord(word)} fullCollection={fullCollection} selected={selectedWord} close={()=>setViewCollection(false)} />
            
            {selectedWord && <CardFull info={selectedWord} deleteWord={deleteWord} />}
          </CollectionContainer>}
        <Title/>
          <SubmitScan handleFileUpload={handleFileUpload} submitFile={submitFile} viewCollection={()=>setViewCollection(true)} />
          <Error errorText={error}/>
          {loading && <div className="fixed mt-48">Scanning file.. {`(this can take a moment)`}</div>}
      </Page>
    </>
  );
}

export default App;
