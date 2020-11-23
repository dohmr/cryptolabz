import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import API from "../util/API";
import Chart from "../components/Chart"

function PortfolioPage() {
  const { logout, user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    // example API call
    API.getProtectedExample().then((response) => {
      setData(response.data);
    });
  }, []);



  return (
    <div>
      <Chart />
      <h1>COIN Information</h1>
      <p>user id: {user.id}</p>
      <h3>{user.username}'s Coin Purse</h3>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}

export default PortfolioPage;
