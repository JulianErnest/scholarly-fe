import { useOutlet } from "react-router-dom";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  return (
    <div>
      <h1>I'm the home layout</h1>
      {outlet}
    </div>
  );
}
