export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">
        &copy; {currentYear} KNS Group. All rights reserved.
      </p>
    </footer>
  );
}
