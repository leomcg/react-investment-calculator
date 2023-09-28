import { useState } from "react";
import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: "",
    yearlyContribution: "",
    interest: "",
    investmentDuration: "",
  });

  const onCurrentSavingsChange = (event) => {
    setInvestmentData((previousData) => {
      return {
        ...previousData,
        currentSavings: +event.target.value,
      };
    });
    //console.log(investmentData);
  };

  const onYearlyContributionChange = (event) => {
    setInvestmentData((previousData) => {
      return {
        ...previousData,
        yearlyContribution: +event.target.value,
      };
    });
    //console.log(investmentData);
  };

  const onInterestChange = (event) => {
    setInvestmentData((previousData) => {
      return {
        ...previousData,
        interest: +event.target.value,
      };
    });
    //console.log(investmentData);
  };

  const onInvestmentDurationChange = (event) => {
    setInvestmentData((previousData) => {
      return {
        ...previousData,
        investmentDuration: +event.target.value,
      };
    });
    //console.log(investmentData);
  };

  const clearData = () => {
    setInvestmentData({
      currentSavings: "",
      yearlyContribution: "",
      interest: "",
      investmentDuration: "",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    clearData();
    props.onSubmit(investmentData);
  };

  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={onCurrentSavingsChange}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={onYearlyContributionChange}
            value={investmentData.yearlyContribution}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={onInterestChange}
            value={investmentData.interest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={onInvestmentDurationChange}
            value={investmentData.investmentDuration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={clearData}>
          Reset
        </button>
        <button className={styles.button} onClick={onSubmit}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
