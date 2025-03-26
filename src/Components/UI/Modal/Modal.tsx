import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

const modalRoot = document.getElementById('portal') || document.body;

export const Modal: FC<PropsWithChildren<{ onClose: () => void }>> = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Блокируем скролл при открытии
    return () => {
      document.body.style.overflow = 'auto'; // Разблокируем при закрытии
    };
  }, []);

  return createPortal(
    <div className={style.modal}>
      <span className={style.close} onClick={onClose}>
        &times;
      </span>

      <div className={style.body_modal}>{children}</div>
    </div>,
    modalRoot,
  );
};
