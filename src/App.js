import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import MyPage from "./pages/User/MyPage";
import TripPage from "./pages/Trip/TripPage";
import LocalAdvicePage from "./pages/LocalAdvice/LocalAdvicePage";
import MapPage from "./pages/Map/MapPage";
import ChattingPage from "./pages/Chatting/ChattingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="trippage" element={<TripPage/>}/>
            <Route path="localadvicepage" element={<LocalAdvicePage/>}/>
            <Route path="mappage" element={<MapPage/>}/>
            <Route path="chattingpage" element={<ChattingPage/>}/>
            <Route path="mypage" element={<MyPage/>}>
                <Route path="localauth" element={<ChattingPage/>}/>
                <Route path="mytrip" element={<ChattingPage/>}/>
                <Route path="myfavorites" element={<ChattingPage/>}/>
                <Route path="mypost" element={<ChattingPage/>}/>
                <Route path="myadvice" element={<ChattingPage/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
