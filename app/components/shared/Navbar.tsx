// "use client"



// import * as React from "react"
// import Link from "next/link"
// import { cn } from "@/lib/utils"
// // shadcn/ui এর কম্পোনেন্টগুলো ইমপোর্ট করুন
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// // ১. components ডাটা ডিফাইন করুন
// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description: "A modal dialog that interrupts the user with important content.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description: "For sighted users to preview content available behind a link.",
//   },
// ]

// export default function Navbar() {
//   // ২. isMobile ডিফাইন করুন (আপাতত false রাখা হলো)
//   const isMobile = false;

//   return (
//     <header className="py-4 shadow-md bg-white">
//      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//   {/* logo */}
//   <div className="font-bold text-xl">
//     <Link href="/">Daily News</Link>
//   </div>

//   {/* desktop menu */}
//   <NavigationMenu>
//     <NavigationMenuList className="hidden md:flex">
      
//       {/* Home Dropdown */}
//       <NavigationMenuItem>
//         <NavigationMenuTrigger>Home</NavigationMenuTrigger>
//         <NavigationMenuContent>
//           <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//             {/* এখানে li এর ভেতর NavigationMenuItem ছিল, সেটি বাদ দিয়ে NavigationMenuLink ব্যবহার করতে হবে */}
//             <li className="row-span-3">
//               <NavigationMenuLink asChild>
//                 <Link
//                   href="/docs"
//                   className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                 >
//                   <div className="mb-2 mt-4 text-lg font-medium">Docs</div>
//                   <p className="text-sm leading-tight text-muted-foreground">
//                     Visit our documentation for more details.
//                   </p>
//                 </Link>
//               </NavigationMenuLink>
//             </li>
//             <ListItem href="/docs" title="Introduction">
//               Re-usable components built using Radix UI and Tailwind CSS.
//             </ListItem>
//             <ListItem href="/docs/installation" title="Installation">
//               How to install dependencies and structure your app.
//             </ListItem>
//           </ul>
//         </NavigationMenuContent>
//       </NavigationMenuItem>

//       {/* Components Dropdown */}
//       <NavigationMenuItem>
//         <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//         <NavigationMenuContent>
//           <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//             {components.map((component) => (
//               <ListItem
//                 key={component.title}
//                 title={component.title}
//                 href={component.href}
//               >
//                 {component.description}
//               </ListItem>
//             ))}
//           </ul>
//         </NavigationMenuContent>
//       </NavigationMenuItem>

//       {/* Docs Single Link - এখানে নেস্টিং ঠিক করা হয়েছে */}
//       <NavigationMenuItem>
//         <Link href="/docs" className={navigationMenuTriggerStyle()}>
//           Docs
//         </Link>
//       </NavigationMenuItem>

//     </NavigationMenuList>
//   </NavigationMenu>

//   {/* Right side login */}
//   <div className="flex items-center gap-4">
//     <button className="text-sm font-medium">Login</button>
//   </div>
// </nav>
//     </header>
//   )
// }

// // ৩. ListItem কম্পোনেন্টটি এখানে ডিফাইন করা হলো
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';


const Navbar = () => {
  return (
   <header className='py-4 shadow-md'>
    <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* logo */}
      <div>
        <Link href="/">Daily News</Link>
      </div>
      {/* dexstop */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/news">News</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
   </header>
  );
};

export default Navbar;