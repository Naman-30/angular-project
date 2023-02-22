import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuctsComponent } from './procucts.component';

describe('ProcuctsComponent', () => {
  let component: ProcuctsComponent;
  let fixture: ComponentFixture<ProcuctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuctsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
