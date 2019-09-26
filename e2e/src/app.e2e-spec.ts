import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });


  it('Form should have main title', () => {
    expect(page.getFormTitle()).toEqual('Your custom quote starts here.');
  });
  it('Form should have sub title', () => {
    expect(page.getFormSubtitle()).toEqual('This is going to be amazing.');
  });
  it('Form should have 3 inputs', () => {
    expect(page.getFormInputs().count()).toBe(3);
  });
  it('Form should have 1 select', () => {
    expect(page.getFormSelects().count()).toBe(1);
  });
  it('Form submit button should be disabled', () => {
    expect(page.getFormSubmitButton().isEnabled()).toBeFalsy();
  });
  it('Form submit button should be enabled', () => {
    page.fillOutForm();
    expect(page.getFormSubmitButton().isEnabled()).toBeTruthy();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
