import ContactForm from "@/components/contact-form";
import { InteractiveMap } from "@/components/interactive-map";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          We&apos;d love to hear from you. Whether you have a question about our projects, partnerships, or anything else, our team is ready to answer all your questions.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
        <div className="space-y-8">
          <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="bg-accent rounded-md p-3">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold">Our Headquarters</h3>
                    <p className="text-muted-foreground">302 Shail's Mall, Nr. Girish Cold Drinks, C. G. Road, Navarangpura, Ahmedabad - 380009</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-accent rounded-md p-3">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">expo@pharmatechnologyindex.com</p>
                    <p className="text-muted-foreground">kns_98@yahoo.com</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-accent rounded-md p-3">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">+91 93772 35673</p>
                </div>
            </div>
          </div>
          <div className="mt-8">
            <InteractiveMap />
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="font-headline text-3xl font-bold">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
