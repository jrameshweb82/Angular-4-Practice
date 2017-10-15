import { InOutPage } from './app.po';

describe('in-out App', () => {
  let page: InOutPage;

  beforeEach(() => {
    page = new InOutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
