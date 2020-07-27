import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTimeDomainComponent } from './click-time-domain.component';

describe('ClickTimeDomainComponent', () => {
  let component: ClickTimeDomainComponent;
  let fixture: ComponentFixture<ClickTimeDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTimeDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTimeDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
