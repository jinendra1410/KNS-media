import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { KnsLogo } from './icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <KnsLogo className="h-16 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">Innovation Continues</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <p>302 Shail's Mall, Nr. Girish Cold Drinks, C. G. Road, Navarangpura, Ahmedabad - 380009</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p>+91 93772 35673</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 mt-1" />
                <div>
                    <p>expo@pharmatechnologyindex.com</p>
                    <p>kns_98@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
             <h3 className="font-headline font-semibold">Our Websites</h3>
             <ul className="space-y-2 text-sm">
                <li><Link href="http://www.PharmaTechExpo.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">www.PharmaTechExpo.com</Link></li>
                <li><Link href="http://www.Knsmedia.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">www.Knsmedia.com</Link></li>
             </ul>
          </div>
        </div>
         <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            &copy; {currentYear} KNS Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
