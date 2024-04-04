
const Error = ({errorText}) => {
    return (
        <div className="h-20">
            <div className="text-lg text-red-500 font-bold">{errorText}</div>
        </div>
    )
}

export default Error;