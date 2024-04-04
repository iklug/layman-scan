
const Page = ({children}) => {
    return (
       <div className=" w-screen lg:w-4/5 h-screen m-auto bg-slate-100 flex flex-col justify-center items-center gap-10 relative">
        {children}
       </div> 
    )
}

export default Page;