import React from 'react';
import FormWallet from '../components/FormWallet';
import getCurrencyApi from '../services/currencyAPI';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencyList: [],
    };
  }

  componentDidMount() {
    this.addCurrencys();
  }

  addCurrencys = async () => {
    const currencys = await getCurrencyApi();
    const arrayCurrencys = Object.keys(currencys);
    const filterCurrencys = arrayCurrencys.filter((currency) => currency !== 'USDT');
    this.setState({
      currencyList: filterCurrencys,
    });
  }

  render() {
    const { currencyList } = this.state;
    return (
      <div>
        <Header />
        <FormWallet currencyList={ currencyList } />
      </div>
    );
  }
}

export default Wallet;
