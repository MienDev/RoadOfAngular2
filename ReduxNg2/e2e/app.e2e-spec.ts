import { ReduxNg2Page } from './app.po';

describe('redux-ng2 App', function() {
  let page: ReduxNg2Page;

  beforeEach(() => {
    page = new ReduxNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
