import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/main.page";
import {
  FAVORITES_PAGE_PATH,
  MAIN_PAGE_PATH,
  PEOPLES_PAGE_PATH,
} from "./routes/paths";
import FavoritesPage from "./pages/favorites/favorites.page";
import Menu from "./components/menu/menu.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path={MAIN_PAGE_PATH} element={<MainPage />} />
          {/* <Route path={PEOPLES_PAGE_PATH} element={<MainPage />} /> */}
          <Route path={FAVORITES_PAGE_PATH} element={<FavoritesPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
