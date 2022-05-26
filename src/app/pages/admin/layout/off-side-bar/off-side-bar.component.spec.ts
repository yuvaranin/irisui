import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffSideBarComponent } from './off-side-bar.component';

describe('OffSideBarComponent', () => {
  let component: OffSideBarComponent;
  let fixture: ComponentFixture<OffSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
