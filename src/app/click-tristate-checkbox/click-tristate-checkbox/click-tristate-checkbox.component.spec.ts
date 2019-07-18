import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTristateCheckboxComponent } from './click-tristate-checkbox.component';

describe('ClickTristateCheckboxComponent', () => {

  let component: ClickTristateCheckboxComponent;
  let debugComponent: DebugElement;
  let debugComponentNative: HTMLElement;
  let fixture: ComponentFixture<ClickTristateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClickTristateCheckboxComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTristateCheckboxComponent);
    component = fixture.componentInstance;
    debugComponent = fixture.debugElement;
    debugComponentNative = debugComponent.nativeElement;
    fixture.detectChanges();
  });

  it('shouldCreate', () => {
    expect(component).toBeTruthy();
  });

  it('withDisableInput_shouldSisableInput', () => {
    component.disabled = true;
    fixture.detectChanges();
    const inputElement = debugComponentNative.querySelector('input');
    expect(inputElement.disabled).toBeTruthy();
  });

  it('withoutCheckoxLabelInput_checkboxLabelElementShouldAbsence', () => {
    fixture.detectChanges();
    const labelElement = debugComponentNative.querySelector('span.checkbox-label');
    expect(labelElement).toBeFalsy();
  });

  it('instancesOfComponents_shouldHaveUniqueID', () => {
    for (let i = 0; i < 100; i += 1) {
      const testSet = new Set();
      for (let k = 0; k < 1000; k += 1) {
        testSet.add(component['generateUniqueId']());
      }
      expect(testSet.size).toEqual(1000);
    }
  });

  it('generateUniqueId_shouldReturnCorrectId', () => {
    for (let k = 0; k < 1000; k += 1) {
      const id = component['generateUniqueId']();
      expect(id.length).toEqual(10);
      expect(id.charAt(0)).toEqual('_');
    }
  });

  it('setterValue_setsCorrectValue', () => {
    component.value = true;
    fixture.detectChanges();
    expect(component.valueInternal).toEqual(1);

    component.value = false;
    fixture.detectChanges();
    expect(component.valueInternal).toEqual(0);

    component.value = 2;
    fixture.detectChanges();
    expect(component.valueInternal).toEqual(2);
  });

  it('calculateNextState_shouldReturnCorrectState', () => {
    component.valueInternal = 0;
    fixture.detectChanges();
    expect(component['calculateNextState']()).toEqual(1);

    component.valueInternal = 1;
    fixture.detectChanges();
    expect(component['calculateNextState']()).toEqual(0);

    component.valueInternal = 2;
    fixture.detectChanges();
    expect(component['calculateNextState']()).toEqual(0);
  });

  it('multiselectedContainer_shouldWork', () => {
    component.valueInternal = 2;
    fixture.detectChanges();
    const multiselectDiv = debugComponentNative.querySelector('div.multiselected');
    expect(multiselectDiv).toBeTruthy();
  });

});
