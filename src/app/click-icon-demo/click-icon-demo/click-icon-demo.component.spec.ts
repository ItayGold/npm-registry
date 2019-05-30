import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickIconDemoComponent } from './click-icon-demo.component';

describe('ClickIconDemoComponent', () => {
  let component: ClickIconDemoComponent;
  let fixture: ComponentFixture<ClickIconDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickIconDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickIconDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
