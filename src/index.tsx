/**
 * src/index.tsx
 * (c) 2022 Shuzhou Liu.
 * Code is served under the MIT license.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// @ts-ignore
import { IndexPage } from "./components/index.tsx";
import "./index.css";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render(): React.ReactNode {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<IndexPage get="random" />} />
          </Routes>
        </Router>
      </>
    );
  }
}

const app = document.getElementById("app");
let root = ReactDOM.createRoot(app);
root.render(<App />);
