"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <Button variant="outline" onClick={() => {}} title="Sign out">
      <LogOut />
    </Button>
  );
}
