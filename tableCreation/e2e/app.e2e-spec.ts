import { TableCreationPage } from './app.po';

describe('table-creation App', () => {
  let page: TableCreationPage;

  beforeEach(() => {
    page = new TableCreationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
