import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredThreeByThreeGrid } from './centered-three-by-three-grid';

describe('CenteredThreeByThreeGrid', () => {
  let component: CenteredThreeByThreeGrid;
  let fixture: ComponentFixture<CenteredThreeByThreeGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredThreeByThreeGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredThreeByThreeGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
