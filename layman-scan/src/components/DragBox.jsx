
const DragBox = ({children}) => {
    return (
        <div className={`h-4/5 hidden md:flex w-1/2 border-2 border-dashed border-slate-300  lg:w-1/2 bg-slate-100 flex-col ${children ? 'justify-start' : 'justify-center' } overflow-scroll gap-1`}>
            {!children && <p className="text-center text-slate-500">{'Drag to Add to Collection'}</p>}
            {children}
        </div>
    )
}

export default DragBox;