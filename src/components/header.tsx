'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { KnsLogo } from './icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/management', label: 'Management' },
  { href: '/portfolio', label: 'Portfolio' },
];

const whatWeDoLinks = [
  { href: '/expertise', label: 'Our Expertise' },
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/seminars', label: 'Seminars' },
  { href: '/rbsm', label: 'RBSM' },
  { href: '/publications', label: 'Publications' },
  { href: '/international', label: 'International Exhibition' },
];

const otherNavLinks = [
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const allNavLinks = [...mainNavLinks, ...whatWeDoLinks, ...otherNavLinks];

export function Header() {
  const pathname = usePathname();

  const renderLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={cn(
        'transition-colors hover:text-foreground',
        pathname === href ? 'text-foreground' : 'text-muted-foreground'
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 flex h-24 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base mr-4"
          >
            <KnsLogo className="h-16 w-auto" />
          </Link>
          {mainNavLinks.map(({ href, label }) => renderLink(href, label))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'gap-1 px-0 h-auto hover:bg-transparent transition-colors hover:text-foreground',
                  whatWeDoLinks.some((l) => pathname.startsWith(l.href))
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                What We Do <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {whatWeDoLinks.map(({ href, label }) => (
                <DropdownMenuItem key={href} asChild>
                  <Link href={href}>{label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {otherNavLinks.map(({ href, label }) => renderLink(href, label))}
        </div>
        
        {/* Mobile Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:hidden"
        >
          <KnsLogo className="h-14 w-auto" />
        </Link>


        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <KnsLogo className="h-14 w-auto" />
              </Link>
              {allNavLinks.map(({ href, label }) => (
                 <Link
                  key={href}
                  href={href}
                  className={cn(
                    'transition-colors hover:text-foreground',
                    pathname === href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
