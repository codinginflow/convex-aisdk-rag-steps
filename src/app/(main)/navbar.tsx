import logo from "@/assets/logo.png";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";

export function Navbar() {
  return (
    <nav className="flex justify-center p-4 bg-card border-b">
      <div className="container xl:max-w-6xl flex items-center mx-auto justify-between">
        <Link
          href="/notes"
          className="flex items-center gap-3 text-xl font-semibold text-card-foreground hover:opacity-80 transition-opacity"
        >
          <Image
            src={logo}
            alt="Smart Notes Logo"
            width={32}
            height={32}
            className="rounded"
          />
          Smart Notes
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SignOutButton />
        </div>
      </div>
    </nav>
  );
}
