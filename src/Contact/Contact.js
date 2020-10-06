import React from 'react';
import './Contact.css';

let regexSubject = /^[A-zА-я .]{5,50}$/i;
let regexEmail = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
let regexMessage = /^[A-zА-я0-9]{10,400}$/i;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateSubject: '',
      validateEmail: '',
      validateMessage: '',
      successfulMailing: '',
    }
  }

  validateContactForm = () => {

    let subject = document.querySelector('#subject').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    // Validate subject
    if (regexSubject.test(subject)) {
      this.setState({ validateSubject: '' });
    } else {
      this.setState({ validateSubject: 'Тема письма должна быть от 5 до 50 символов' });
    }

    // Validate Email
    if (regexEmail.test(email)) {
      this.setState({ validateEmail: '' });
    } else {
      this.setState({ validateEmail: 'Пожалуйста введите верный email адрес' });
    }

    // Validate message
    if (regexMessage.test(message)) {
      this.setState({ validateMessage: '' });
    } else {
      this.setState({ validateMessage: 'Текст сообщения должнен быть от 10 до 400 символов' });
    }
  }


  contactForm = (e) => {
    e.preventDefault();

    let subject = document.querySelector('#subject');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    let successBlock = document.querySelector('#success');

    // If there are errors in filling out the prohibit form submission
    if (this.state.validateSubject === 'Тема письма должна быть от 5 до 50 символов' || this.state.validateEmail === 'Пожалуйста введите верный email адрес' || this.state.validateMessage === 'Текст сообщения должнен быть от 10 до 400 символов') {
      return false;
    }
    // If the form is filled out correctly allow sending
    else {
      this.setState({ successfulMailing: 'Письмо отправлено!' });
      setTimeout(
        function () {
          this.setState({ successfulMailing: '' });

          subject.value = '';
          email.value = '';
          message.value = '';

          successBlock.style.visibility = 'hidden';
          successBlock.classList.remove("send-message");
        }
          .bind(this),
        3000
      );
      successBlock.style.visibility = 'visible';
      successBlock.classList.add("send-message");
    }
  }

  render() {
    return (
      <div id="contact">
        <section className="mbr-section form4 cid-qv7rl9AWVJ" id="form4-6x" data-rv-view="6024">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="google-map">
                  <iframe style={{ border: 0 }} title={'Google Map'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154740.6994000315!2d36.26436839483999!3d55.57846418005708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1580894919586!5m2!1sru!2sru" width="100%" height="400px">
                  </iframe>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <h3 className="text-center mb-4">Написать письмо</h3>
                <form onChange={this.validateContactForm} onSubmit={this.contactForm} name="sentMessage">
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label htmlFor="subject">Тема письма</label>
                      <input type="text" defaultValue={this.state.subject} className="form-control mt-1" placeholder="Тема письма" id="subject" required />
                      <p className="text-danger mt-1">{this.state.validateSubject}</p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label htmlFor="email">Почта</label>
                      <input type="email" defaultValue={this.state.email} className="form-control mt-1" placeholder="Почта" id="email" required />
                      <p className="text-danger mt-1">{this.state.validateEmail}</p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label htmlFor="message">Сообщение</label>
                      <textarea defaultValue={this.state.message} rows="5" className="form-control mt-1" placeholder="Сообщение" id="message" required></textarea>
                      <p className="text-danger mt-1">{this.state.validateMessage}</p>
                    </div>
                  </div>
                  <div className="form-submit row justify-content-center">
                    <button className="btn btn-outline-dark mr-2" type="submit" id="sendMessageButton"><i className="material-icons mdi mdi-message-outline"></i>Отправить</button>
                    <div className="clearfix"></div>
                  </div>
                  <div className="mt-3 mb-4 text-center p-4" id="success">{this.state.successfulMailing}</div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
