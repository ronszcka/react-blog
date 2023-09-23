import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { NewPost } from "./components/NewPost";
import { BlogPost } from "./components/BlogPost";

export function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  )

}
