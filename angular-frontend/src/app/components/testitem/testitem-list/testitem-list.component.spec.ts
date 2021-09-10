import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestitemListComponent } from './testitem-list.component';

describe('TestitemListComponent', () => {
  let component: TestitemListComponent;
  let fixture: ComponentFixture<TestitemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestitemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
