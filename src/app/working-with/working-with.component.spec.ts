import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithComponent } from './working-with.component';

describe('WorkingWithComponent', () => {
  let component: WorkingWithComponent;
  let fixture: ComponentFixture<WorkingWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingWithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
