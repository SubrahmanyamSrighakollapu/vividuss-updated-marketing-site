import Link from 'next/link';
import { Icon } from './Icon';
export function Button({
  children,
  href,
  className = '',
  variant = 'primary',
  icon = 'ArrowRight',
  download = false,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'white' | 'amber';
  icon?: string;
  download?: boolean;
}) {
  const cls = 'button button--' + variant + ' ' + className;
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  );
  return download || href.startsWith('http') || href.startsWith('mailto:') ? (
    <a
      className={cls}
      href={href}
      download={download || undefined}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {content}
    </a>
  ) : (
    <Link className={cls} href={href}>
      {content}
    </Link>
  );
}
