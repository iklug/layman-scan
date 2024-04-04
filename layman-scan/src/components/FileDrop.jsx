const FileDrop = ({handleFileUpload}) => {
  return (
    <div className="">
        <input type="file" className="" accept="image/*" onChange={handleFileUpload}/>
    </div>
  )
};

export default FileDrop;