import { ClerkProviderWithRoutes } from "./auth/ClerkProviderWithRoutes.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HistoryPanel } from "./history/HistoryPannel.jsx";
import { MCQChallange } from "./challenge/MCQChallange.jsx";
import { AuthenticationPage } from "./auth/AuthenticationPage.jsx";
import { Layout } from "./layout/Layout.jsx";
import { ChallengeGenerator } from "./challenge/ChallangeGenerator.jsx";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
