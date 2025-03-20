import { Route, Routes } from "react-router";
import CustomLoginPage from "./pages/login_page";

/**
 * Main entry point of the React application.
 * Includes a navbar, a brief description, and a sign-in form.
 *
 * @return {JSX.Element} The JSX representation of the App component.
 */

// eslint-disable-next-line no-lone-blocks
{/* TODO add logo, simple image and animation for them with the description below. */ }

function App() {

  return (
    <Routes>
      <Route path="/" element={<CustomLoginPage />} />

    </Routes>
  );
}

export default App;