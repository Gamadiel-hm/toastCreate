import { CheckSvg } from '../assets/svg/checkSvg';
import { ErrorSvg } from '../assets/svg/errorSvg';
import { InfoSvg } from '../assets/svg/infoSvg';
import { WarningSvg } from '../assets/svg/warningSvg';
import { TOAST_EVENTS } from '../Type/toastButton.const';

interface Props {
  iconName: string;
}

export const IconShared: React.FC<Props> = ({ iconName }) => {
  return (
    <>
      {iconName === TOAST_EVENTS.SUCCESS && <CheckSvg />}
      {iconName === TOAST_EVENTS.ERROR && <ErrorSvg />}
      {iconName === TOAST_EVENTS.WARNING && <WarningSvg />}
      {iconName === TOAST_EVENTS.INFO && <InfoSvg />}
    </>
  );
};
