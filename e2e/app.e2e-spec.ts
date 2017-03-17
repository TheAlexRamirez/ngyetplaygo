import { NgYetplaygoPage } from './app.po';

describe('ng-yetplaygo App', () => {
  let page: NgYetplaygoPage;

  beforeEach(() => {
    page = new NgYetplaygoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
