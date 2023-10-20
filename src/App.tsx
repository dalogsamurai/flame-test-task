import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/main.page";
import {
  FAVORITES_PAGE_PATH,
  MAIN_PAGE_PATH,
  PEOPLES_PAGE_PATH,
} from "./routes/paths";
import FavoritesPage from "./pages/favorites/favorites.page";
import PeoplesPage from "./pages/peoples/peoples.page";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path={MAIN_PAGE_PATH} element={<MainPage />} />
          <Route path={PEOPLES_PAGE_PATH} element={<PeoplesPage />} />
          <Route path={FAVORITES_PAGE_PATH} element={<FavoritesPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
