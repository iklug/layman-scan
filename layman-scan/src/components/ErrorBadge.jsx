import { useDispatch } from "react-redux";
import { clearError } from "../redux/errorSlice";

export default function ErrorBadge({ text }) {
  const dispatch = useDispatch();

  return (
    <span className=" absolute bottom-40 inline-flex items-center gap-x-0.5 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
      {text}
      <button
        type="button"
        className="group relative -mr-1 size-3.5 rounded-sm hover:bg-red-600/20"
      >
        <span className="sr-only">Remove</span>
        <svg
          viewBox="0 0 14 14"
          className="size-3.5 stroke-red-600/50 group-hover:stroke-red-600/75"
        >
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span
          className="absolute -inset-1"
          onClick={() => dispatch(clearError())}
        />
      </button>
    </span>
  );
}
