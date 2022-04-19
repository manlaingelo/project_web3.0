import {
  Home,
  Service,
  Watcher,
  Evidence,
  Dashboard,
  Insurance,
  Upload,
} from "./pages";
import { Routes, Route, Link } from "react-router-dom";
// import { Services } from "./components";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      {/* TODO: change client component anme to watcher for understandable naming purpose */}
      <Route path="/watcher" element={<Watcher />} />
      <Route path="/evidence" element={<Evidence />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </>
);

export default App;
