import logoAsset from '@/assets/logo.png.asset.json';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 48 }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Living Colors"
      style={{ height: `${size}px`, width: 'auto' }}
      className={`object-contain ${className}`}
    />
  );
}
