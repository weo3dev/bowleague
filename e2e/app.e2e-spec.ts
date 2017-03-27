import { BowleaguePage } from './app.po';

describe('bowleague App', () => {
  let page: BowleaguePage;

  beforeEach(() => {
    page = new BowleaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
