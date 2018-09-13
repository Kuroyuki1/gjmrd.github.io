import React, { Component } from 'react';
import Card from './components/Card';
import social from './json/social.json';
import otherSocial from './json/otherSocial.json';
import './css/bootstrap.min.css';
import './App.css';



class App extends Component {
  state = {
    locale: 'ru',
  };
  switchLanguage = (locale) => {
    this.setState({ locale });
    console.log(locale);
  };
  setRu = () => {
    this.switchLanguage('ru');
  }
  setEn = () => {
    this.switchLanguage('en');
  }
  render() {
    const { locale } = this.state;
    const title = locale === 'ru' ? 'Для связи' : 'For communication';
    const otherTitle = locale === 'ru' ? 'Другие соц. сети' : 'Other social';
    const langTitle = locale === 'ru' ? 'Язык' : 'Language';
    return (
      <div className="content container">
        <div className="lang col-md-4">
          <div>
            <h4>{langTitle}</h4>
          </div>
          <div className="lang-switch ru" onClick={this.setRu} >Русский</div>
          <div className="lang-switch en" onClick={this.setEn}>English</div>
        </div>
        <div className="social">
          <h1>{title}</h1>
          <div className="row">
            {social.map((card) => {
              return <Card key={card.name} card={card} />;
            })}
          </div>
        </div>
        <div className="social other-social">
          <h1>{otherTitle}</h1>
          <div className="row">
            {otherSocial.map((card) => {
              return <Card key={card.name} card={card} />;
            })}
          </div>
        </div>
      </div>
    
    );
  }
}

export default App;
