const SecondaryButton = ({ text, action }) => {
  return (
    <div
      onClick={action}
      className="rounded-md w-full text-center bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {text}
    </div>
  );
};

export default SecondaryButton;
