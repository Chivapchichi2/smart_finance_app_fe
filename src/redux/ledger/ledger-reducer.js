import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import ledgerActions from './ledger-actions';

const incomeByMonth = createReducer([], {
  [ledgerActions.getUserIncomeByMonthSuccess]: (_, { payload }) => [...payload],
});

const expenseByMonth = createReducer([], {
  [ledgerActions.getUserExpenseByMonthSuccess]: (_, { payload }) => [
    ...payload,
  ],
});

const incomeByMonthError = createReducer('', {
  [ledgerActions.getUserIncomeByMonthError]: (_, { payload }) => payload,
});

const expenseByMonthError = createReducer('', {
  [ledgerActions.getUserExpenseByMonthError]: (_, { payload }) => payload,
});

const deleteUserTransaction = createReducer([], {
  [ledgerActions.deleteUserTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const reportSliderValue = createReducer('Расходы', {
  [ledgerActions.setReportSliderValue]: (_, { payload }) => payload,
});

const transactionsByYear = createReducer([], {
  [ledgerActions.getUserTransactionsByYearSuccess]: (_, { payload }) => [
    payload,
  ],
});

const errorByYear = createReducer('', {
  [ledgerActions.getUserExpenseByYearError]: (_, { payload }) => payload,
});

const setDateValue = createReducer('', {
  [ledgerActions.setCurrentDateValue]: (_, { payload }) => payload,
});

const expenseChartValue = createReducer([], {
  [ledgerActions.setExpenseChartValue]: (_, { payload }) => [...payload],
});

const incomeChartValue = createReducer([], {
  [ledgerActions.setIncomeChartValue]: (_, { payload }) => [...payload],
});

const currentPeriodDate = createReducer('', {
  [ledgerActions.setCurrentPeriodDate]: (_, { payload }) => payload,
});

const resetValuesOfInput = createReducer(0, {
  [ledgerActions.resetInputValues]: (state, { payload }) => state + payload,
});

export default combineReducers({
  incomeByMonth,
  expenseByMonth,
  incomeByMonthError,
  reportSliderValue,
  expenseByMonthError,
  deleteUserTransaction,
  transactionsByYear,
  errorByYear,
  setDateValue,
  expenseChartValue,
  incomeChartValue,
  currentPeriodDate,
  resetValuesOfInput,
});
