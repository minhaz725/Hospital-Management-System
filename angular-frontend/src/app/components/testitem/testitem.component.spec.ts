import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestitemComponent } from './testitem.component';

describe('TestitemComponent', () => {
  let component: TestitemComponent;
  let fixture: ComponentFixture<TestitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
