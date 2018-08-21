import { MyCompetitionsModule } from './my-competitions.module';

describe('MyCompetitionsModule', () => {
  let myCompetitionsModule: MyCompetitionsModule;

  beforeEach(() => {
    myCompetitionsModule = new MyCompetitionsModule();
  });

  it('should create an instance', () => {
    expect(myCompetitionsModule).toBeTruthy();
  });
});
