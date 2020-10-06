import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

// Current date
let formatDate = date => ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();

// Default currency
let money = 'USD';

// Unique Key Counter
let UniqueKeyCounter = 0;
UniqueKeyCounter = parseInt(UniqueKeyCounter);

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'currencyRate': {},
      baseCurrency: money,
    }
    this.currency = ['USD', 'EUR', 'RUB', 'CAD', 'PHP'];
    this.getRate();
  }

  getRate = () => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${money}`)
      .then(data => {
        return data.json()
      })
      .then(data => {
        this.setState({ date: data.date });
        let result = {};
        for (let index = 0; index < this.currency.length; index++) {
          result[this.currency[index]] = data.rates[this.currency[index]];
        }
        this.setState({ currencyRate: result });
      });
  }

  baseCurrency = (e) => {
    e.preventDefault();

    let elements = e.target.elements;
    money = elements['type-currency'].value;

    this.setState({ baseCurrency: money });

    if (money === 'EUR' || money === 'USD' || money === 'RUB' || money === 'CAD' || money === 'PHP') {
      this.currency = ['USD', 'EUR', 'RUB', 'CAD', 'PHP'];
      this.currency.splice(this.currency.indexOf(money), 1);
      this.getRate();
    }
  }

  render() {
    return (
      <div id="rate-and-calc">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mb-5">Курсы валют на {formatDate(new Date())}</h3>
            <div className="flex-container">
              <form onSubmit={this.baseCurrency}>
                <label className="mb-2" htmlFor="money">Выбрать валюту</label>
                <div className="input-group mb-3">
                  <select id="money" className="custom-select form-control" name="type-currency">
                    {Object.keys(this.state.currencyRate).map((keyName, index) =>
                      (
                        <option key={UniqueKeyCounter++}>{keyName}</option>
                      )
                    )}
                  </select>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="submit">Выбрать</button>
                  </div>
                </div>
              </form>
              <h3 className="text-center mb-3 mt-4">Вами выбрана валюта: {this.state.baseCurrency}</h3>
            </div>
          </div>
          {Object.keys(this.state.currencyRate).map((keyName, index) =>
            (
              <div className="col-lg-3 mt-3" key={UniqueKeyCounter++}>
                <div className="card">
                  <div className="card-body">
                    <p className="float-left">{this.state.currencyRate[keyName].toFixed(2)}*</p>
                    <h3 className="text-right mb-5">{keyName}</h3>
                    <p className="text-center mt-2">*Можно купить за 1 {this.state.baseCurrency}</p>
                  </div>
                </div>
              </div>
            )
          )}
          <Calc rate={this.state.currencyRate} baseCurrency={this.state.baseCurrency} />
        </div>
      </div>
    );
  }
}

export default Rate;
