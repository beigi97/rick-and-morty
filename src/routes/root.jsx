import { Outlet } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Root() {
  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark transition-colors duration-200">
      <header className="p-4 bg-secondary dark:bg-secondary-dark shadow-md">
        <nav className="container mx-auto flex justify-end items-center">
          <DarkModeToggle />
        </nav>
      </header>
      <main className="container mx-auto p-4 text-text dark:text-text-dark">
        <Outlet />
      </main>
    </div>
  );
}
