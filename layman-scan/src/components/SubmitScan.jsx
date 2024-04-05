import FileDrop from "./FileDrop"
import Button from "./Button"

const SubmitScan = ({handleFileUpload, submitFile}) => {
    return (
        <div className=" p-10 rounded-lg flex flex-col gap-10">
            <FileDrop handleFileUpload={handleFileUpload} />
            <div className="flex justify-center gap-6">
                <Button priority={'secondary'} title='View Collection' handleClick={()=>console.log('tert click')}/>
                <Button priority='primary' title='Start Scan' handleClick={submitFile}/>
            </div>
        </div>
    )
}

export default SubmitScan;