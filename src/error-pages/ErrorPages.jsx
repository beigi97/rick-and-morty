import React from "react";
import { useRouteError, Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark">
      <nav className="p-6 ">
        <div className="container mx-auto flex justify-end ">
          <DarkModeToggle />
        </div>
      </nav>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-8 rounded-lg bg-secondary dark:bg-secondary-dark shadow-xl max-w-lg w-full mx-4">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {error.status}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Oops! unexpected error has occurred.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <i>{error.statusText || error.message}</i>
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="px-6 py-2 bg-secondary-default hover:bg-secondary-dark dark:bg-secondary-default dark:hover:bg-secondary-third text-white rounded-lg transition-all duration-200"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
