
const ResultContainer = ({children}) => {
    return (
        <div className="z-10 border border-red-400 fixed h-screen w-full lg:w-4/5 bg-slate-100 flex justify-center gap-6 py-10 px-10">
            {children}
        </div>
    )
}

export default ResultContainer;