
const CollectionContainer = ({children}) => {
    return (
        <div className="z-10 fixed w-screen h-screen lg:w-4/5 bg-slate-200 flex-col flex">
            {children}
        </div>
    )
}

export default CollectionContainer;