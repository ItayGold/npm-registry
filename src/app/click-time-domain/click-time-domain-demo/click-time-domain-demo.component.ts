import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-time-domain-demo',
  templateUrl: './click-time-domain-demo.component.html',
  styleUrls: ['./click-time-domain-demo.component.scss']
})
export class ClickTimeDomainDemoComponent implements OnInit {

  codes = [
    `<click-time-domain></click-time-domain>`,
    `<click-time-domain customModalClass="all-text-red-custom-class"></click-time-domain>`,
    `<click-time-domain mask="D-M-YY"></click-time-domain>`,
    `      const dates = {
        to: new Date(2002, 1, 11),
        from: new Date(2002, 1, 3),
      };
      <click-time-domain [calendarState]="dates"></click-time-domain>`,
    `      const state = {
        to: new Date(2002, 1, 11),
        from: new Date(2002, 1, 11),
        isRelative: true,
        currentDate: new Date(2002, 1, 21),
      }
      <click-time-domain [calendarState]="state"></click-time-domain>`,
    `     <click-time-domain
      [calendarState]="state"
      (datesSaved)="onDatesChanged($event)"
     ></click-time-domain>`,
    `<click-time-domain [translations]="translations"></click-time-domain>`,
    ``,
    ``,
  ];

  dates = {
    to: new Date(2002, 1, 11),
    from: new Date(2002, 1, 3),
  };

  state = {
    isRelative: true,
    to: new Date(2002, 1, 11),
    from: new Date(2002, 1, 11),
    currentDate: new Date(2002, 1, 21),
  };

  translations = {
    CalendarForm_AutoUpdate_CheckBoxLabel: 'Автообновление',
    CalendarForm_AutoUpdate_CheckBoxTooltip: 'Подсказка автообносления',
    CalendarForm_EndInvalid: 'Неправильная конечная дата',
    CalendarForm_StartInvalid: 'Направильная начальная дата',
    CalendarForm_LoadDates_Day: 'День',
    CalendarForm_LoadDates_Days: 'Дней',
    CalendarForm_LoadDates_Count: 'Загружено даты',
    CalendarForm_Today_LinkButton: 'Сегодня',
    Form_Save_Buttons: 'Сохранить',
    Form_Cancel_Buttons: 'Отменить',
  };

  constructor() {}

  ngOnInit() {}

  onDatesSaved(event) {
    alert(JSON.stringify(event));
  }
}
