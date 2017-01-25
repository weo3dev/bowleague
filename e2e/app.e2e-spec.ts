import { TestcasePage } from './app.po';

describe('testcase App', function() {
  let page: TestcasePage;

  beforeEach(() => {
    page = new TestcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
