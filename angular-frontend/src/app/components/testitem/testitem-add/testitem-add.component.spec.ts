import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestitemAddComponent } from './testitem-add.component';

describe('TestitemAddComponent', () => {
  let component: TestitemAddComponent;
  let fixture: ComponentFixture<TestitemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestitemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestitemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
