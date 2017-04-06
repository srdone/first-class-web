import { browser, element, by } from 'protractor';

export class FirstClassWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fc-root h1')).getText();
  }
}
