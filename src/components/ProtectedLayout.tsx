import { useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  return (
    <div>
      <h1>I'm the home layout</h1>
      {outlet}
    </div>
  );
}
