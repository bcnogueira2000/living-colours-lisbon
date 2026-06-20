import logoAsset from '@/assets/logo.png.asset.json';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 48 }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Living Colours"
      style={{ height: `${size}px`, width: 'auto' }}
      className={`object-contain filter drop-shadow-sm ${className}`}
    />
  );
}
