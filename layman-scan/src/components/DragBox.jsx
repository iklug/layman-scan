import {dropTargetForElements} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useRef, useState } from 'react';
import Card from './Card';

const DragBox = ({children, location, cards}) => {

    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState(false);


    useEffect(()=> {
        const el = ref.current;
        if(!el){
            throw new Error('we have error');
        }
        return dropTargetForElements({
            element: el,
            getData: () => ({location}),
            onDragEnter: ({source}) => {
                if(source.data.location){
                    console.log(source.data.location, location);
                }
                
                setIsDraggedOver(true)},
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => setIsDraggedOver(false),
        })
    },[])


    return (
        <div className={`h-full hidden md:flex w-1/2 px-2 border-2 border-dashed ${isDraggedOver ? 'border-blue-400' : 'border-slate-200'}   lg:w-1/2 bg-slate-100 flex-col justify-start overflow-scroll`} ref={ref}>
            { cards?.length === 0 && <p className="text-center text-slate-500 my-auto">{'Drag to Add to Collection'}</p>}
            {cards.map(item => 
                
                   item.location === 'collection' ? <Card info={item.word} key={item.word} location={item.location} ></Card> : null
            )
            }
        </div>
    )
}

export default DragBox;