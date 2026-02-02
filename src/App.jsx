import "./App.css";
import Toolbar from "./EventHandlingComponenets/Toolbar";
import GalleryImage from "./EventHandlingComponenets/GalleryImage";
import FormMessage from "./EventHandlingComponenets/FormMessage";
import CounterNoUpdateState from "./EventHandlingComponenets/CounterNoUpdateState";
import CounterUpdateState from "./EventHandlingComponenets/CounterUpdateState";
import FormObject from "./EventHandlingComponenets/FormObject";
import BucketList from "./EventHandlingComponenets/BucketList";
function App() {
  return (
    <>
      <h1>Event Handling</h1>
      <Toolbar
        onPlayMovie={() => alert("Play Movie clicked!")}
        onUploadImage={() => alert("Upload Image clicked!")}
      />
      <GalleryImage />
      <FormMessage />
      <CounterNoUpdateState />
      <CounterUpdateState />
      <FormObject />
      <BucketList />
    </>
  );
}

export default App;
