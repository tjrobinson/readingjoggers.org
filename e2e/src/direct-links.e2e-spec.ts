import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('direct links', () => {
  
  it('should work', async () => {
    browser.ignoreSynchronization = true;
    await browser.get("https://www.readingjoggers.org/");
    await browser.get("https://www.readingjoggers.org/home");
    await browser.get("https://www.readingjoggers.org/news");
    await browser.get("https://www.readingjoggers.org/events");
    await browser.get("https://www.readingjoggers.org/events/club-runs-and-training");
  });
});
