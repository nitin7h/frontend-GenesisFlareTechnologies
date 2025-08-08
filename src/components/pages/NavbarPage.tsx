import Link from "next/link";

import { ModeToggle } from "../ModeToggle";

export default function NavbarPage() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Growly
      </div>
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}

        <ModeToggle />

        <div
          className=" text-black dark:text-white font-bold px-6 py-2 rounded-lg hover:text-indigo-600 transition  dark:hover:text-indigo-600"
          data-lpignore="true"
        >
          <Link href={"/admin"}>For Admin</Link>
        </div>
        <div
          className=" text-black dark:text-white font-bold px-6 py-2 rounded-lg hover:text-indigo-600 transition  dark:hover:text-indigo-600"
          data-lpignore="true"
        >
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </nav>
  );
}
