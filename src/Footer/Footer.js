import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer">
        <div className="container mt-5">
          <div className="col-lg-12">
            <div className="row text-center d-flex justify-content-center pt-4 mb-3 border border-left-0 border-right-0">
              <div className="col-lg-3 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a className="text-secondary" href="/">Главная</a>
                </h6>
              </div>
              <div className="col-lg-3 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a className="text-secondary" href="/about">О нас</a>
                </h6>
              </div>
              <div className="col-lg-3 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a className="text-secondary" href="/contact">Контакты</a>
                </h6>
              </div>
              <div className="col-lg-3 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a className="text-secondary" target="_blank" rel="noopener noreferrer" href="http://exchangeratesapi.io/">API</a>
                </h6>
              </div>
            </div>
            <div className="row d-flex text-center justify-content-center mb-md-0 mb-5 mt-5">
              <div className="col-md-8 col-12">
                <p>Чтобы создать что-нибудь важное или открыть что-нибудь значительное, необходимы деньги и время. Конечно, далеко не всегда, потратив время и деньги, добиваешься выдающихся результатов. И все же эти две составляющие еще никогда никому не мешали. Особенно мало, как правило, времени. Оно исчезает буквально с каждой секундой: тик-так, тик-так… Раз! — и уже ничего не осталось. Чей-то шанс навсегда потерян. Но если есть деньги, время можно купить. Равно как и свободу. Свобода и время — важнейшие для человека вещи, какие только возможно купить за деньги.</p>
                <p className="font-italic text-right mt-1">Харуки Мураками</p>
              </div>
            </div>

            <div className="footer-copyright text-center mt-4 pb-3">© 2020 Автор проекта: Егоров Дмитрий</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
