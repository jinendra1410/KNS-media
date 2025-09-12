import type { SVGProps } from 'react';

export function KnsLogo(props: SVGProps<SVGSVGElement>) {
  return (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      <path d="M12 12a4.49 4.49 0 0 1-4.49-4.49A4.49 4.49 0 0 1 12 3.02a4.49 4.49 0 0 1 4.49 4.49A4.49 4.49 0 0 1 12 12z" />
      <path d="M12 12a4.49 4.49 0 0 1 4.49 4.49A4.49 4.49 0 0 1 12 20.98a4.49 4.49 0 0 1-4.49-4.49A4.49 4.49 0 0 1 12 12z" />
    </svg>
  );
}
