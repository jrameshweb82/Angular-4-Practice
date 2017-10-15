import { FormControlPage } from './app.po';

describe('form-control App', () => {
  let page: FormControlPage;

  beforeEach(() => {
    page = new FormControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
