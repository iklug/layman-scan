import Button from "./Button";

const ResultContainer = ({children, close, viewCollection}) => {
    return (
        <div className="z-10  fixed h-screen w-full lg:w-4/5 bg-slate-100 flex flex-col justify-start items-center py-10 px-10">
             
                    <div className=" flex-grow h-4/5 w-full lg:w-4/5 bg-slate-100 flex justify-center gap-6 py-10 px-10">
               {children}
                    </div>
                    <div className="w-full flex justify-end gap-6 px-10">
                        <Button priority={'secondary'} handleClick={viewCollection} title='View Collection'></Button>
                        <Button priority={'primary'} handleClick={close} title='New Scan'></Button>
                    </div>
        </div>
         
    )
}

export default ResultContainer;