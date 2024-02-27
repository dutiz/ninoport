import React from "react";

export function Footer({ withSignUpForm = true, settings }) {
  return (
    <div className="bg-gray-300 dark:bg-gray-900">
      <div className="container py-20">
        <div className="row">
          <div className="col-12">
            <p className="text-black dark:text-white text-center text-l md:text-xl">
              &copy; Enis Miftari, {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
