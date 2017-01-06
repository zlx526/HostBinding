import { HostBindingPage } from './app.po';

describe('host-binding App', function() {
  let page: HostBindingPage;

  beforeEach(() => {
    page = new HostBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
