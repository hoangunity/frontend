import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Container from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Container>
        <Routers>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </Routers>
      </Container>
    </>
  );
}
