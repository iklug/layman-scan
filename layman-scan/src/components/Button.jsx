const Button = ({handleClick, title, priority}) => {



    return (
<button type="button" className={` rounded-lg focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 focus:outline-none ${priority === 'primary' ? 'text-white bg-blue-600 hover:bg-blue-800 ' : priority === 'secondary' ? 'border-2 border-blue-600 text-blue-600 font-semibold bg-slate-100 hover:bg-slate-200' : 'text-blue-600  px-2hover:underline hover:text-blue-700 hover:underline'} `} onClick={handleClick}>{title}</button>

    )
}

export default Button;