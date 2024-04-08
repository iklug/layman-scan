import CardSmallDetails from "./CardSmallDetails";

const CardSmall = ({info, handleClick, selected}) => {
    
    
    const keyword = info.split(':')[0];

    const noStars = keyword
    .split("")
    .filter((char) => char !== "*")
    .join("");
    
    return (
        <div className={`flex pl-6 p-4 pr-2 flex-grow text-lg shadow text-gray-700 items-center rounded-lg hover:bg-gray-50 ${selected ? 'bg-gray-50 shadow-lg' : 'bg-white'} `} onClick={() => handleClick(info)}>
            <div className={`font-semibold ${selected && 'text-blue-500'}`}>{noStars}</div>

        </div>
    )
}

export default CardSmall;