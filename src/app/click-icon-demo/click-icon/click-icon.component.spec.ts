import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickIconComponent } from './click-icon.component';

describe('ClickIconComponent', () => {
  let component: ClickIconComponent;
  let fixture: ComponentFixture<ClickIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
