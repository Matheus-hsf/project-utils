import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveScrollIncreaseComponent } from './directive-scroll-increase.component';

describe('DirectiveScrollIncreaseComponent', () => {
  let component: DirectiveScrollIncreaseComponent;
  let fixture: ComponentFixture<DirectiveScrollIncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveScrollIncreaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveScrollIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
