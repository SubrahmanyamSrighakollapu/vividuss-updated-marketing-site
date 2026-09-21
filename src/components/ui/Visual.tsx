import Image from 'next/image';
import type { Asset } from '@/types';
export function Visual({
  asset,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 700px) 100vw, 50vw',
}: {
  asset: Asset;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (typeof asset === 'string')
    return (
      <div className={'visual ' + className}>
        <Image src={asset} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    );
  const x = asset.index % asset.columns,
    y = Math.floor(asset.index / asset.columns);
  return (
    <div
      className={'visual sheet-visual ' + className}
      role="img"
      aria-label={alt}
      style={{
        backgroundImage: 'url("' + asset.src + '")',
        backgroundSize: asset.columns * 100 + '% ' + asset.rows * 100 + '%',
        backgroundPosition:
          (asset.columns > 1 ? (x / (asset.columns - 1)) * 100 : 0) +
          '% ' +
          (asset.rows > 1 ? (y / (asset.rows - 1)) * 100 : 0) +
          '%',
      }}
    />
  );
}
