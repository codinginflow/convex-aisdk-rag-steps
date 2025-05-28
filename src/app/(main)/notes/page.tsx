import { Metadata } from "next";
import { NotesPage } from "./notes-page";

export const metadata: Metadata = {
  title: "Your Notes",
};

export default function Page() {
  return <NotesPage />;
}
