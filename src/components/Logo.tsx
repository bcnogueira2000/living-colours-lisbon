import logoImg from '@/assets/logo.png';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="Living Colors"
      width={size}
      height={size}
      className={className}
    />
  );
}
