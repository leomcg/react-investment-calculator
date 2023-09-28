import styles from "./InvestmentTable.module.css";

const InvestmentTable = (props) => {
  console.log("props:", props);
  return (
    /* Todo: Show below table conditionally (only once result data is available) */
    /* Show fallback text if no data is available */
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>
                {yearData.currentSavings.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td>
                {yearData.yearlyInterest.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td>
                {yearData.totalInterestGained.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td>
                {yearData.totalInvestedCapital.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default InvestmentTable;
