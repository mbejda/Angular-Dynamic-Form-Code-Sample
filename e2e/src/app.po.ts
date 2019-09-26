import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getFormTitle() {
    return element(by.css('app-root mat-card-title')).getText() as Promise<string>;
  }
  getFormSubtitle() {
    return element(by.css('app-root mat-card-subtitle')).getText() as Promise<string>;
  }
  getFormInputs() {
    return element.all(by.css('app-root form input'));
  }
  getFormSelects() {
    return element.all(by.css('app-root form mat-select'));
  }
  getFormSubmitButton() {
    return element(by.className('submit-btn'));
  }
  getFormCancelButton() {
    return element(by.className('cancel-btn'));
  }
  fillOutForm() {
    element.all(by.css('input')).get(0).sendKeys('1233');
    element.all(by.css('input')).get(1).sendKeys('1233');
    element.all(by.css('input')).get(2).sendKeys('123333');
    browser.driver.sleep(1000);
  }

}
