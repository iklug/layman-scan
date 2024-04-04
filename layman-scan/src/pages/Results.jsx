import Button from "../components/Button";
import Card from "../components/Card";

const Results = ({ handleClick, result }) => {
  return (
    <div className="z-10 fixed h-screen w-full lg:w-4/5 bg-slate-100 flex-col flex items-center gap-10 py-10">
      <div className="h-4/5 w-full lg:w-4/5 bg-slate-100 flex flex-wrap justify-start items-stretch overflow-scroll gap-2 px-4">
        {result.map((item, index) => (
          <Card info={item} key={index}></Card>
        ))}
      </div>
      <Button handleClick={handleClick} title={"New Scan"} />
    </div>
  );
};

export default Results;
