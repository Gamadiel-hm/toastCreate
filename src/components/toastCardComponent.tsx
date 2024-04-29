import { ToastCard } from '../Type/toast.type';
import { IconShared } from './iconButton';

interface Props extends ToastCard {}

export const ToastCardComponent: React.FC<Props> = ({
  date,
  message,
  typeToast,
  user
}) => {
  return (
    <>
      <div className={`toast card-${typeToast}`}>
        <div className='toast-header'>
          <p>{user}</p>
          <p>{date.getFullYear()}</p>
        </div>
        <div className='toast-body'>
          <div className='toast-icon icon'>
            {<IconShared iconName={typeToast} />}
          </div>
          <p className='toast-text'>{message}</p>
          <div className='toast-action'></div>
        </div>
      </div>
    </>
  );
};
