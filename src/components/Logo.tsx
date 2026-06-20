import logoAsset from '@/assets/logo.png.asset.json';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Living Colors"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
