"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu";
import { useContext } from "react";
import { ThemeContext } from "@/app/contex/themeContext";

interface ThemeContextType {
isDarkMode:boolean;
toggleTheme:() => void;
}

const Navbar = () => {
  const pathname = usePathname()

  const {isDarkMode, toggleTheme}:any = useContext(ThemeContext)
  
  return (
    <header className={`py-4 shadow-md ${isDarkMode? "bg-gray-900 text-white" :""}`}>
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-6">
            
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className={`${pathname === '/news' ?'text-red-500' : ''} hover:text-red-600`}>
              News
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={`${pathname === '/about' ?'text-red-500' : ''} hover:text-red-600`}>About</NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`${pathname === '/services' ?'text-red-500' : ''} hover:text-red-600`}>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="space-y-2 p-4  rounded-md">
                  <li>
                    <NavigationMenuLink href="/services/web">Web Development</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/app">Mobile Apps</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/seo">SEO</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className={`${pathname === '/contact' ?'text-red-500' : ''} hover:text-red-600`}>Contact</NavigationMenuLink>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dark Mode Switch */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center gap-3">
          <span className="mr-2">Dark Mode</span>
          <Switch />
        </div>
         <Button variant="default">Login</Button>

        </div>

       <MobileMenu/>
      </nav>
    </header>
  );
};

export default Navbar;
