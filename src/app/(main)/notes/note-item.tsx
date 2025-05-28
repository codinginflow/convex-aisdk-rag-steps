"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NoteItem() {
  return (
    <>
      <Card className="cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle>Note Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="line-clamp-3 text-sm text-muted-foreground whitespace-pre-line">
            Note Body
          </div>
        </CardContent>
      </Card>
    </>
  );
}
