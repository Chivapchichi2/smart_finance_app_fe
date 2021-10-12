import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductDescription from './input/productDescription';
import ProductCategory from './input/productCategory';
import ProductValue from './input/productValue';
import ProductButtons from './input/productButtons';
import DatePicker from './input/datePicker';

import routes from '../../../routes/routes';

import ledgerOperations from '../../../redux/ledger/ledger-operations';

import s from './tabsFrom.module.css';

const TabForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handlerSubmit = e => {
    e.preventDefault();
    const transaction = {
      date: e.target[0].defaultValue,
      description: e.target[1].value,
      category: e.target[2].textContent,
      value: e.target[3].valueAsNumber,
    };

    dispatch(ledgerOperations.addUserIncome(transaction));

    e.target[1].value = '';
    console.dir(e.target[2]);
  };
  return (
    <form type="submit" className={s.tabForm} onSubmit={handlerSubmit}>
      {location.pathname === routes.reportExpenses ||
      location.pathname === routes.reportIncomes ? null : (
        <DatePicker />
      )}

      <div className={s.formWrapper}>
        <ProductDescription />
        <ProductCategory />
      </div>
      <ProductValue />
      <ProductButtons />
    </form>
  );
};

export default TabForm;
