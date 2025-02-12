import { 
  Facebook, Instagram, Youtube, Twitter, Search, ShoppingCart, Heart, Phone, Mail, Menu 
} from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 md:flex-nowrap">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <h6 className="text-sm">(225) 555-0118</h6>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <h6 className="text-sm">michelle.rivera@example.com</h6>
        </div>

        <h6 className="hidden md:block text-sm font-bold">
          Follow us and get a chance to win 80% off!
        </h6>

        <div className="flex items-center gap-3">
          <h6 className="text-sm font-bold">Follow Us:</h6>
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">Bandage</a>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Product">Shop</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Mimi chic</SheetTitle>
                </SheetHeader>
                <ul className="space-y-4 mt-4">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/Product">Shop</Link></li>
                  <li><Link href="/About">About</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/Contact">Contact</Link></li>
                  <li><Link href="/pages">Pages</Link></li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          {/* Utility Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:underline text-sm">Login / Register</a>
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </div>
  );
}
