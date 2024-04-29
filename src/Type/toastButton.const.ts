export const TOAST_EVENTS = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
} as const;

type typeButtonType = 'button' | 'submit';
const buttonType: typeButtonType = 'button';

export const TOAST_BUTTONS = {
  [TOAST_EVENTS.SUCCESS]: {
    title: () => letterUpperCase(TOAST_EVENTS.SUCCESS),
    type: buttonType,
    classToast: TOAST_EVENTS.SUCCESS
  },
  [TOAST_EVENTS.ERROR]: {
    title: () => letterUpperCase(TOAST_EVENTS.ERROR),
    type: buttonType,
    classToast: TOAST_EVENTS.ERROR
  },
  [TOAST_EVENTS.INFO]: {
    title: () => letterUpperCase(TOAST_EVENTS.INFO),
    type: buttonType,
    classToast: TOAST_EVENTS.INFO
  },
  [TOAST_EVENTS.WARNING]: {
    title: () => letterUpperCase(TOAST_EVENTS.WARNING),
    type: buttonType,
    classToast: TOAST_EVENTS.WARNING
  }
};

const letterUpperCase = (title: string): string => {
  return `${title[0].toUpperCase()}${title.split('').slice(1).join('')}`;
};
