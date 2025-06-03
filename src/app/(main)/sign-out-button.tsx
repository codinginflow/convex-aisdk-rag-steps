"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  const { signOut } = useAuthActions();

  return (
    <Button variant="outline" onClick={() => void signOut()} title="Sign out">
      <LogOut />
    </Button>
  );
}
