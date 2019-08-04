import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTimeDomainModalComponent } from './click-time-domain-modal.component';

describe('ClickTimeDomainModalComponent', () => {
  let component: ClickTimeDomainModalComponent;
  let fixture: ComponentFixture<ClickTimeDomainModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTimeDomainModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTimeDomainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
