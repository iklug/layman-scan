import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Results = ({ handleClick, result }) => {
  
    return (


      <div className="h-4/5 w-1/2  lg:w-1/2 bg-slate-100 flex flex-col overflow-scroll gap-1 relative">
        {result.map((item, index) => (
            <Card info={item} key={index}></Card>
            ))}
      </div>
    
  );
};

export default Results;
