'use client';
import { useEffect, useId, useRef } from 'react';
import { Icon } from './Icon';
export function Modal({
  open,
  onClose,
  title,
  children,
  className = '',
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null),
    id = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog?.open) dialog?.showModal();
    else if (!open && dialog?.open) dialog.close();
    if (open) {
      const before = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = before;
      };
    }
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={'modal ' + className}
      aria-labelledby={id}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="modal-inner">
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog">
          <Icon name="X" />
        </button>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </dialog>
  );
}
