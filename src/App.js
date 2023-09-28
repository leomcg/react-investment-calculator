import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [results, setResults] = useState([]);
  const yearlyData = [];

  const calculateHandler = (userInput) => {
    console.log("userInput: ", userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const interest = +userInput.interest / 100;
    const investmentDuration = +userInput.investmentDuration;
    let totalInterestGained = 0;
    let totalInvestedCapital = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < investmentDuration; i++) {
      const yearlyInterest = currentSavings * interest;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterestGained += yearlyInterest;
      totalInvestedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        currentSavings,
        totalInterestGained,
        totalInvestedCapital,
      });
    }

    console.log("yearlyData: ", yearlyData);
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onSubmit={calculateHandler} />
      {!results.length && <p>No Investment Calculated Yet.</p>}
      {results.length && <InvestmentTable yearlyData={results} />}
    </div>
  );
}

export default App;
