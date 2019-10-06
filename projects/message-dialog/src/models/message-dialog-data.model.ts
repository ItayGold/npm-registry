export enum DialogType {
  warning,
  info,
  error
}
export enum ButtonOptions {
  ok,
  okCancel
}


export class MessageDialogData {
  title: string;
  message: string;
  dialogType: DialogType;
  okButtonString: string;
  cancelButtonString: string;
  buttonOptions: ButtonOptions;


}