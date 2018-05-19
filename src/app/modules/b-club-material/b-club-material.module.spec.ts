import { BClubMaterialModule } from './b-club-material.module';

describe('BClubMaterialModule', () => {
  let bClubMaterialModule: BClubMaterialModule;

  beforeEach(() => {
    bClubMaterialModule = new BClubMaterialModule();
  });

  it('should create an instance', () => {
    expect(bClubMaterialModule).toBeTruthy();
  });
});
