import { NgBlaPage } from './app.po';

describe('ng-bla App', function() {
  let page: NgBlaPage;

  beforeEach(() => {
    page = new NgBlaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
