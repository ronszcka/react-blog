import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export function App() {
  
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )

}
