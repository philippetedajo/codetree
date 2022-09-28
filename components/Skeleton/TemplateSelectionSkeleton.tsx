import React from "react";

export const TemplateSelectionSkeleton = () => {
  let items = [];

  for (let i = 0; i < 10; i++) {
    items.push(
      <div key={i} className="flex animate-pulse">
        <div className="h-9 w-9 bg-gray-400 rounded-sm" />
        <div className="flex flex-col items-start justify-start pl-4 space-y-2.5 mt-1.5">
          <div className="h-2 w-12 bg-gray-400 rounded-sm" />
          <div className="h-2 w-20 bg-gray-400 rounded-sm" />
        </div>
      </div>
    );
  }

  return <>{items}</>;
};
