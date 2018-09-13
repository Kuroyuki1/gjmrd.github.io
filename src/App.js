import React, { Component } from 'react';
import SocialBlock from './components/SocialBlock';
import otherSocial from './json/cards/en/otherSocial.json';
import social from './json/cards/en/social.json';
import ruLocale from './json/localization/ru-Ru.json';
import enLocale from './json/localization/en-En.json';
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
    const {socialTitle, otherSocialTitle, langTitle} = locale == 'ru' ? ruLocale : enLocale;
    return (
      <div className="content container">
        <div className="lang col-md-4">
          <div>
            <h4>{langTitle}</h4>
          </div>
          <div className="lang-switch ru" onClick={this.setRu} >Русский</div>
          <div className="lang-switch en" onClick={this.setEn}>English</div>
        </div>
        <SocialBlock key={1} social={social} title={socialTitle}/>
        <SocialBlock key={2} social={otherSocial} title={otherSocialTitle}/>
      </div>
    );
  }
}

export default App;
