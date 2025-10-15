import Image from 'next/image';

export function KnsLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="KNS Group Logo"
      width={130}
      height={80}
      className={className}
      priority
    />
  );
}
