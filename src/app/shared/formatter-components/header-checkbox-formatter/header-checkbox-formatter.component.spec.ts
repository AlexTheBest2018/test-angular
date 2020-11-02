import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCheckboxFormatterComponent } from './header-checkbox-formatter.component';

describe('HeaderCheckboxFormatterComponent', () => {
  let component: HeaderCheckboxFormatterComponent;
  let fixture: ComponentFixture<HeaderCheckboxFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCheckboxFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCheckboxFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
