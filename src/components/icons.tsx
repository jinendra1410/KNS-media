import Image from 'next/image';

export function KnsLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://jmtech-solutions.tech/kns%20Group%20logo.png"
      alt="KNS Group Logo"
      width={130}
      height={80}
      className={className}
      priority
    />
  );
}
