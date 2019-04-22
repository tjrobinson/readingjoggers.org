import { browser, by, element } from 'protractor';

export class ContactPage {
  navigateTo() {
    return browser.get('/contact');
  }

  getTitle() {
    return element(by.css('h2')).getText();
  }
}
