const getUserBalance = state => state.ledger.transaction.balance;
const getReportSliderValue = state => state.ledger.reportSliderValue;
const incomesByMonthData = state => state.ledger.incomeByMonth;
const expenseByMonthData = state => state.ledger.expenseByMonth;
const datepickerValue = state => state.ledger.setDateValue;
const getExpenseChartValue = state => state.ledger.expenseChartValue;
const getIncomeChartValue = state => state.ledger.incomeChartValue;

export default {
  getUserBalance,
  getReportSliderValue,
  incomesByMonthData,
  expenseByMonthData,
  datepickerValue,
  getExpenseChartValue,
  getIncomeChartValue,
};
