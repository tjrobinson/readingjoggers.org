import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about');
  }

  getTitle() {
    return element(by.css('h2')).getText();
  }
}
