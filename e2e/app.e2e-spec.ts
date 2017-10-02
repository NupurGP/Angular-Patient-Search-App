import { PatientSearchApplicationPage } from './app.po';

describe('patient-search-application App', () => {
  let page: PatientSearchApplicationPage;

  beforeEach(() => {
    page = new PatientSearchApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
