import { useEffect, useState } from "react";
import { sleep } from "./utils/sleep";
import RewardsList from "./components/RewardsList/RewardsList";
import addPointsToTransactions from "./utils/addPointsToTransactions";
import customersIdsFromTransactions from "./utils/customersIds";
import transactionByCustomer from "./utils/transactionByCustomer";
import { calculateTotalPoints } from "./utils/calculateTotalPoints";
import "./App.css";
import Loader from "./components/Loader/Loader";
import AppContext from "./contexts/AppContext";
import fetchAPI from "./api/fetchAPI";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      await sleep(1000);
      const data = await fetchAPI("MOCK_DATA.json");
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  useEffect(() => {
    const transactionsWithPoints = addPointsToTransactions(transactions);

    const customerIds = customersIdsFromTransactions(
      transactionsWithPoints,
      "customerId"
    );

    const allTransactionByCustomer = transactionByCustomer(
      transactionsWithPoints,
      customerIds
    );
    setRewards(calculateTotalPoints(allTransactionByCustomer));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{ transactions, setTransactions, rewards, setRewards }}
    >
      <div className="container">
        <h1>Reward points earned for each customer per month and total</h1>
        {rewards.length ? <RewardsList /> : <Loader />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
