import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTreeViewComponent } from './click-tree-view.component';

describe('ClickTreeViewComponent', () => {
  let component: ClickTreeViewComponent;
  let fixture: ComponentFixture<ClickTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
