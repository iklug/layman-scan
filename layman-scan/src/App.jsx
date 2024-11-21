// import Home from "./pages/Home";
// import FileDrop from "./components/FileDrop";
// import BackButton from "./components/BackButton";
// import Scan from "./pages/Scan";
// import ResultCard from "./components/ResultCard";
// import Results from "./pages/Results";
// import CollectionCard from "./components/CollectionCard";
// import Collection from "./pages/Collection";
// import LoadingScreen from "./pages/LoadingScreen";
import { useSelector } from "react-redux";
import { selectNavigation } from "./redux/navSlice";
import renderView from "./utility/renderView";
function App() {
  const currentView = useSelector(selectNavigation);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col gap-4 justify-center items-center px-10">
      {renderView(currentView)}
    </div>
  );
}

export default App;
