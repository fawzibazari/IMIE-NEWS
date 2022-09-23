import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import "./home.css";

export default function Home() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  });
  return (
    <>
      <Header />
      <div className="home">home</div>
    </>
  );
}
