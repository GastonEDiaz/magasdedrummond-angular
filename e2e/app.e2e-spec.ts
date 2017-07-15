import { MagasdedrummondAngula4Page } from './app.po';

describe('magasdedrummond-angula4 App', () => {
  let page: MagasdedrummondAngula4Page;

  beforeEach(() => {
    page = new MagasdedrummondAngula4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
