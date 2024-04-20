import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSessionValid } from "../services/userServices";

export const useCheckSession = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const userAuthenticated = await isSessionValid();
      if (!userAuthenticated) {
        // Redirect to login route
        navigate("/login");
      }
    };
    checkSession();
  }, []);
};
