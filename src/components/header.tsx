import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";

export function Header () {
    return (
        <header className="w-full bg-background pt-4">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="font-bold">
                {siteConfig.name}
                <span className="sr-only">Home</span>
                </Link>
                <nav className="flex items-center space-x-1">
                    <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            size: "icon",
                            className: "h-7 w-7",
                        })
                    )}
                    >
                        <Icons.twitter className="h-3 w-3 fill-current" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <ThemeToggle/>
                </nav>
            </div>
        </header>
    )
}