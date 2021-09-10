import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestitemDetailsComponent } from './testitem-details.component';

describe('TestitemDetailsComponent', () => {
  let component: TestitemDetailsComponent;
  let fixture: ComponentFixture<TestitemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestitemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestitemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
