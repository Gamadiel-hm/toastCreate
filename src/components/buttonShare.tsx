import { ToastCard, ToastEvents } from '../Type/toast.type';

interface Props {
  title: string;
  type: 'button' | 'submit';
  classToast: ToastEvents;
  handleAddToast: (newToast: ToastCard) => void;
}

export const ButtonShare: React.FC<Props> = ({
  title,
  type,
  classToast,
  handleAddToast
}) => {
  const handleClick = () => {
    const newToast: ToastCard = {
      message: 'New message',
      typeToast: classToast,
      user: 'Amnio',
      date: new Date()
    };

    handleAddToast(newToast);
  };

  return (
    <>
      <button
        type={type}
        className={classToast}
        onClick={handleClick}>
        {title}
      </button>
    </>
  );
};
