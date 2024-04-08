
import Card from "../components/Card";

const CollectionContainer = ({children}) => {
    
    
    return (
        <div className="z-10 fixed w-screen h-screen lg:w-4/5 bg-slate-200 flex gap-4 p-6">
            {children}
        </div>
    )
}

export default CollectionContainer;