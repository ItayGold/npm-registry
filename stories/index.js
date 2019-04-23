import { storiesOf } from '@storybook/angular';
// import { withInfo } from '@storybook/addon-info';
// import { withNotes } from '@storybook/addon-notes';
import { Button } from '@storybook/angular/demo';
import { DatePickerComponent } from '@click/date-picker';

storiesOf('@click date picker', module)
  // .addDecorator(
  //   moduleMetadata({
  //     declarations: [DatePickerComponent],
  //   })
  // )
  // .addDecorator(withNotes)
  .add(
    'with text',
    () => ({
      // component: DatePickerComponent,
      props: {
        setDateEvent: $event => {
          const d = new Date($event);
          const year = d.getFullYear();
          let month = '' + (d.getMonth() + 1);
          let day = '' + d.getDate();

          if (month.length < 2) {
            month = '0' + month;
          }
          if (day.length < 2) {
            day = '0' + day;
          }

          return [year, month, day].join('-');
        },
        selectedDate: new Date(),
        todayDate: new Date(),
        todayButtonText: `Today`,
      },
      template: `
        <span
        ><i
          role="button"
          [id]="['123']"
          class="calendar-icon fa fa-calendar"
          (click)="dp.click()"
          (keypress)="dp.click()"
        ></i
      ></span>

      <click-date-picker
        (setDateEvent)="setDateEvent($event)"
        class="dp"
        #dp
        [selectedDate]="selectedDate"
        [todayDate]="todayDate"
        [todayButtonText]="todayButtonText"
      >
      </click-date-picker>
      `,
    })
    // { info: { inline: true, header: false } },
    // { notes: 'My notes on some button' }
  );
