import { Navigate, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/main.page";

function App() {
  return (
    <div className="App">
      {/* <Router location={''} navigator={}> */}
      {/* <Layout> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<PostsPage />} /> */}
      {/* <Route path="/people" element={<SettingsPage />}>
            <Route path=":id" element={<SettingsWallet />} />
            </Route> */}
      {/* <Route path="/favorites" element={<MessagesPage />} /> */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      {/* <Pages /> */}
      {/* </Routes> */}
      {/* </Layout> */}
      {/* </Router> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
