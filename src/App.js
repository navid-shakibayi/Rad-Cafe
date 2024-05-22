import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
const App = ({

}) => {

  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"1"} replace />} />
        {/* <Route path="/" element="home" /> */}
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
