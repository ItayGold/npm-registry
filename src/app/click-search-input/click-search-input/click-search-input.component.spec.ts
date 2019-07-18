import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ClickSearchInputComponent } from './click-search-input.component';

describe('ClickSearchInputComponent', () => {
  let component: ClickSearchInputComponent;
  let fixture: ComponentFixture<ClickSearchInputComponent>;
  let inputElement: DebugElement;
  let containerElement: DebugElement;
  let buttonResetElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClickSearchInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputElement = fixture.debugElement.query(By.css('.search-input'));
    containerElement = fixture.debugElement.query(By.css('.search'));
    buttonResetElement = fixture.debugElement.query(By.css('button'));
  });

  it('shouldCreate', () => {
    expect(component).toBeTruthy();
  });

  it('placeholderInputApplyed', () => {
    component.placeholder = 'test placeholder';
    fixture.detectChanges();
    expect(inputElement.nativeElement.placeholder).toEqual('test placeholder');
  });

  it('changedEvent_shouldWork', () => {
    let changedValue: string;
    component.changed.subscribe(value => changedValue = value);
    component.onSearchChange('test');
    expect(changedValue).toEqual('test');
  });

  it('changedEvent_withNotEmptyValue_addHasValueToContainer', () => {
    component.onSearchChange('test');
    fixture.detectChanges();
    const containerClasses = containerElement.nativeElement.getAttribute('class');
    expect(containerClasses.split(' ')).toContain('has-value');
  });

  it('resetSearch_shouldClearInput', () => {
    inputElement.nativeElement.value = 'test';
    component.resetSearch();
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('');
  });

});
