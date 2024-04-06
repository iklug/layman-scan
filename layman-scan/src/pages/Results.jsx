import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Results = ({ handleClick, result }) => {
  
    return (


      <div className="h-full w-1/2  lg:w-1/2 bg-slate-100 flex flex-col overflow-scroll relative pr-2">
        {result.map((item, index) => 
            
            item.location === 'bank' ? <Card info={item.word} key={item.word} location={item.location}></Card> : null
            )}
      </div>
    
  );
};

export default Results;
