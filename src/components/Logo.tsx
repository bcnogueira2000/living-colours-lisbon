// TODO: replace logoOficial with src/assets/logo-oficial.png once the horizontal logo is provided.
import logoOficial from '@/assets/logo.png.asset.json';
import logoSimples from '@/assets/logo-simples.png.asset.json';

interface LogoProps {
  className?: string;
  size?: number;
  isScrolled?: boolean;
}

export function Logo({ className = '', size = 48, isScrolled = false }: LogoProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ height: `${size}px`, width: `${size * 3}px` }}
    >
      <img
        src={logoOficial.url}
        alt="Living Colours"
        style={{ height: `${size}px` }}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-auto object-contain filter drop-shadow-sm transition-opacity duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={logoSimples.url}
        alt="Living Colours"
        style={{ height: `${size}px` }}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-auto object-contain filter drop-shadow-sm transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
