import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import { useEffect } from "react";
import { UseDataContext } from "./context/context";

export default function App() {
  const { auth, checkToken, setUser } = UseDataContext();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const dados = await checkToken(token);
        setUser(dados.data.username);
      }
    })();
  }, [auth]);

  return (
    <Routes>
      <Route path="/" end element={auth ? <HomePage /> : <SignInPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
