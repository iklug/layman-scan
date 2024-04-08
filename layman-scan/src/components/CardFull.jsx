import CardSmallDetails from "./CardSmallDetails";

const CardFull = ({info, deleteWord}) => {

    const splitInfo = info.split(":");
    const noStars = splitInfo[0]
      .split("")
      .filter((char) => char !== "*")
      .join("");
  


 return (
    <div className={`flex flex-col justify-center pl-4  self-center w-3/5 h-1/2`}>
      <a
        href="#"
        className={`p-6 flex-grow bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col
        transition-colors duration-100`}
        >
          <div className="flex justify-between">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {noStars}
                      </h5>
              <CardSmallDetails/>
          </div>
        <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow pt-4">
          {splitInfo[1]}
        </p>
        <div className="text-gray-300 self-end text-sm hover:text-gray-500" onClick={()=>deleteWord(info)}>delete word</div>
      </a>
    </div>
 )
}
export default CardFull;