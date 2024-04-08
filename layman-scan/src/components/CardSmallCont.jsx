import CardSmall from "./CardSmall";
import Search from "./Search";
const CardSmallCont = ({words, handleClick, fullCollection, selected, close}) => {


    return (
        
<div className="w-1/3 flex-col flex gap-4 mt-20 h-4/5">
   <Search />
    <div className=" w-full h-full overflow-scroll flex flex-col gap-2">
        {fullCollection.map(item => <CardSmall info={item.word} key={item.word} handleClick={handleClick} selected={selected === item.word}/>)}
    </div>
    <div className="mt-2 flex gap-4">
        <div className="px-6 py-2 bg-blue-600 m-auto flex justify-center items-center  rounded-lg text-blue-200 hover:bg-blue-700 transition-colors duration-200" onClick={close}>Home</div>
        <div className=" py-2 px-6 bg-white m-auto flex justify-center items-center  rounded-lg text-gray-500 hover:bg-gray-50 transition-colors duration-200">Favorites</div>
    </div>
</div>
    )
}

export default CardSmallCont;