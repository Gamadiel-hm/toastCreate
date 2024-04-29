import { TOAST_EVENTS } from './toastButton.const';

export interface ToastCard {
  user: string;
  date: Date;
  message: string;
  typeToast: ToastEvents;
}
export type ToastEvents = (typeof TOAST_EVENTS)[keyof typeof TOAST_EVENTS];
