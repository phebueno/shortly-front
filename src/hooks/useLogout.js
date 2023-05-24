import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export default function useLogout() {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(AuthContext);

  return () => {
    const logoutConfirmation = window.confirm(
      "Tem certeza de que deseja sair?"
    );
    if (logoutConfirmation) {
      setUser(undefined);
      setToken(undefined);
      localStorage.clear();
      navigate("/signin");
    }
  };
}
