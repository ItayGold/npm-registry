import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTristateCheckboxComponent } from './click-tristate-checkbox.component';

describe('ClickTristateCheckboxComponent', () => {
  let component: ClickTristateCheckboxComponent;
  let fixture: ComponentFixture<ClickTristateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTristateCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTristateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
