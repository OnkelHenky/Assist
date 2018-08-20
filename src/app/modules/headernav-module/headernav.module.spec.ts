import { HeadernavModule } from './headernav.module';

describe('HeadernavModule', () => {
  let headernavModule: HeadernavModule;

  beforeEach(() => {
    headernavModule = new HeadernavModule();
  });

  it('should create an instance', () => {
    expect(headernavModule).toBeTruthy();
  });
});
