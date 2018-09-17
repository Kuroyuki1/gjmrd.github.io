import React, { Component } from 'react';

import Description from './components/Description';
import SocialBlock from './components/SocialBlock';
import FooterBlock from './components/FooterBlock';

/*
import ruLocale from './json/localization/ru-Ru.json';
import enLocale from './json/localization/en-En.json';

import ruSocial from './json/cards/ru/social.json';
import ruOtherSocial from './json/cards/ru/otherSocial.json';

import enSocial from './json/cards/en/social.json';
import enOtherSocial from './json/cards/en/otherSocial.json';
*/

import './css/bootstrap.min.css';
import './App.css';



class App extends Component {
  state = {
    locale: 'ru',
  };
  componentDidMount() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.toLowerCase().match('ru') === null) {
      this.setEn();
    } else {
      this.setRu();
    }
  }

  componentWillMount() {
    const request = require('sync-request');

    this.state.ruSocial = request('GET', '/src/json/cards/ru/social.json').data;
    this.state.ruOtherSocial = request('GET', '/src/json/cards/ru/otherSocial.json').data;

    this.state.enSocial = request('GET', '/src/json/cards/en/social.json').data;
    this.state.enOtherSocial = request('GET', '/src/json/cards/en/otherSocial.json').data;

    this.state.ruLocale = request('GET', '/src/json/localization/ru-Ru.json').data;
    this.state.enLocale = request('GET', '/src/json/localization/en-En.json').data;
    
  }
  
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
    const { locale, ruLocale, enLocale, ruSocial, ruOtherSocial, enSocial, enOtherSocial } = this.state;
    const localization = locale === 'ru' ? ruLocale : enLocale;
    const { socialTitle, otherSocialTitle, langTitle, documentTitle } = localization;

    const social = locale === 'ru' ? ruSocial : enSocial;
    const otherSocial = locale === 'ru' ? ruOtherSocial : enOtherSocial;

    document.title = documentTitle;
    return (
      <div className="wrapper">
        <div className="content container">
          <div className="lang col-md-4">
            <div>
              <h4>{langTitle}</h4>
            </div>
            <div className="lang-switch ru" onClick={this.setRu}>Русский</div>
            <div className="lang-switch en" onClick={this.setEn}>English</div>
          </div>
          <SocialBlock contacts={social} title={socialTitle} />
          <SocialBlock contacts={otherSocial} title={otherSocialTitle} />
        </div>
        <FooterBlock />
      </div>
    );
  }
}

export default App;
