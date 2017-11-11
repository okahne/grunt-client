import { Gc2Page } from './app.po';

describe('gc2 App', function() {
  let page: Gc2Page;

  beforeEach(() => {
    page = new Gc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
