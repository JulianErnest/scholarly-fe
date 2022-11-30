import { useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const outlet = useOutlet();

  return (
    <div className="">
      <h1>I'm the dashboard page</h1>
    </div>
  );
}
