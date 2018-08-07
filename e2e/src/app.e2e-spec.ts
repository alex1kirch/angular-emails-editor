import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should match the page', () => {
    page.navigateTo();
    expect(page.getImageComparison().checkScreen('share-form')).toEqual(0);
  });
});
