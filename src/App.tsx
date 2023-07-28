import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <div className="flex gap-6">
        <button className="border-2 border-green-500 rounded-md px-2 py-2">
          Increment
        </button>
        <div>{count}</div>

        <button className="border-2 border-red-500 rounded-md px-2 py-2">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
