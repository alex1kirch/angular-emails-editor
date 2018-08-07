import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getImageComparison() {
    return browser.imageComparison;
  }
}
