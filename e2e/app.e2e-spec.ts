import { Angular2HeroTourPage } from './app.po';

describe('angular2-hero-tour App', () => {
  let page: Angular2HeroTourPage;

  beforeEach(() => {
    page = new Angular2HeroTourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
