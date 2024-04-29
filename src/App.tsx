import { useState } from 'react';
import './App.css';
import { ButtonShare } from './components/buttonShare';
import { ToastCardComponent } from './components/toastCardComponent';
import { TOAST_BUTTONS } from './Type/toastButton.const';
import { ToastCard } from './Type/toast.type';

function App() {
  const [toastList, setToastList] = useState<ToastCard[]>([]);

  const handleAddToast = (toastCard: ToastCard) => {
    setToastList([...toastList, toastCard]);
  };

  return (
    <>
      <header>
        <h1>Toast Notifications</h1>
      </header>
      <main>
        <section className='section-buttons'>
          {Object.entries(TOAST_BUTTONS).map(
            ([key, { classToast, title, type }]) => (
              <ButtonShare
                key={key}
                title={title()}
                classToast={classToast}
                type={type}
                handleAddToast={handleAddToast}
              />
            )
          )}
        </section>
      </main>
      <section className='toast-container'>
        {toastList.map((toast, index) => (
          <ToastCardComponent
            key={index}
            message={toast.message}
            date={toast.date}
            typeToast={toast.typeToast}
            user={toast.user}
          />
        ))}
      </section>
    </>
  );
}

export default App;
