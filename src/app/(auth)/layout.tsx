import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-grow flex items-center justify-center h-full bg-gray-700 -mt-12">
      {children}
    </main>
  );
};

export default layout;
