import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRxjsComponent } from './subject-rxjs.component';

describe('SubjectRxjsComponent', () => {
  let component: SubjectRxjsComponent;
  let fixture: ComponentFixture<SubjectRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
