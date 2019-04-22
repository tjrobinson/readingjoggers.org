import { browser, by, element } from 'protractor';

export class EventsPage {
  navigateTo() {
    return browser.get('/events');
  }

  getTitle() {
    return element(by.css('h2')).getText();
  }
}
