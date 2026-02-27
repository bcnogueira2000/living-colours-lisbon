interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Logo({ className = '', size = 32, color = 'currentColor' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Horizontal bars */}
      <rect x="0" y="18" width="40" height="8" rx="4" fill={color} />
      <rect x="60" y="18" width="40" height="8" rx="4" fill={color} />
      <rect x="0" y="46" width="40" height="8" rx="4" fill={color} />
      <rect x="60" y="46" width="40" height="8" rx="4" fill={color} />
      <rect x="0" y="74" width="40" height="8" rx="4" fill={color} />
      <rect x="60" y="74" width="40" height="8" rx="4" fill={color} />

      {/* Vertical bars */}
      <rect x="18" y="0" width="8" height="40" rx="4" fill={color} />
      <rect x="18" y="60" width="8" height="40" rx="4" fill={color} />
      <rect x="46" y="0" width="8" height="40" rx="4" fill={color} />
      <rect x="46" y="60" width="8" height="40" rx="4" fill={color} />
      <rect x="74" y="0" width="8" height="40" rx="4" fill={color} />
      <rect x="74" y="60" width="8" height="40" rx="4" fill={color} />

      {/* Circles (people/community) */}
      <circle cx="22" cy="64" r="7" fill={color} />
      <circle cx="50" cy="8" r="6" fill={color} />
      <circle cx="78" cy="64" r="7" fill={color} />
      <circle cx="50" cy="92" r="6" fill={color} />
    </svg>
  );
}
