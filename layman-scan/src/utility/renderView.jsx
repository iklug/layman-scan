import Home from "../pages/Home";
import Scan from "../pages/Scan";
import Loading from "../pages/LoadingScreen";
import Results from "../pages/Results";
import Collection from "../pages/Collection";

const renderView = (currentView) => {
  switch (currentView) {
    case "home":
      return <Home />;
    case "scan":
      return <Scan />;
    case "loading":
      return <Loading />;
    case "results":
      return <Results />;
    case "collection":
      return <Collection />;
  }
};

export default renderView;
