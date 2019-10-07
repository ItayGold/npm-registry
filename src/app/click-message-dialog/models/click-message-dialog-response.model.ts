export enum Response {
    cancel, ok
};
export class MessageDialogResponse {

    data: Response;

    constructor(data: Response) {
        this.data = data;
    }
};


