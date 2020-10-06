import React from 'react';
import './Calc.css';

// Unique Key Counter
let UniqueKeyCounter = 0;
UniqueKeyCounter = parseInt(UniqueKeyCounter);

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    return {
      rate: props.rate,
      baseCurrency: props.baseCurrency,
    };
  }

  calRate = (e) => {
    e.preventDefault();

    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;

    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2) + ' ' + this.state.baseCurrency })
  }

  render() {
    return (
      <div className="col-lg-12 mt-3">
        <div className="card">
          <div className="card-body">
            <h3> Калькулятор обмена</h3>
            <p className="mt-3">Я хочу купить</p>
            <form className="mt-3" onSubmit={this.calRate}>
              <div className="input-group mb-3">
                <input type="number" className="form-control" name="count-currency" />
                <select className="custom-select form-control" name="type-currency">
                  {Object.keys(this.props.rate).map((keyName, index) =>
                    (
                      <option key={UniqueKeyCounter++}>{keyName}</option>
                    )
                  )}
                </select>
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary" type="submit">Посчитать</button>
                </div>
              </div>
            </form>
            <p className="mt-3">Результат</p>
            <ul className="calc-res">
              <li className="">{this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
