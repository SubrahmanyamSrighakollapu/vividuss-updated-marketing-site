import Link from 'next/link';
import Image from 'next/image';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={'logo ' + (light ? 'light' : '')} href="/" aria-label="Vividuss home">
      <Image
        src="/images/vividuss-logo.png"
        alt="Vividuss - Value to your business"
        width={186}
        height={40}
        priority
        unoptimized
        className="logo-img"
      />
    </Link>
  );
}
