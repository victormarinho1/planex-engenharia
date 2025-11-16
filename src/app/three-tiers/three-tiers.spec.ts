import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTiers } from './three-tiers';

describe('ThreeTiers', () => {
  let component: ThreeTiers;
  let fixture: ComponentFixture<ThreeTiers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeTiers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeTiers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
