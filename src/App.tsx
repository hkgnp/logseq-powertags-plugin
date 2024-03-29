import "@logseq/libs";
import React, { useEffect, useState } from "react";
import "./App.css";
import SavedTags from "./components/SavedTags";

export default function App(props: { savedTags: any[] }) {
  const [savedTags, setSavedTags] = useState<any[]>([]);

  useEffect(function () {
    setSavedTags(props.savedTags);
  });

  return (
    <div className="flex justify-center px-3" tabIndex={-1} id="container">
      <div className="absolute top-10 bg-gray-100 rounded-lg p-3 w-100 border">
        {/* Start content here */}
        <h1 className="mb-3 text-black text-xl">Manage Power Tags</h1>
        {savedTags.length > 0 &&
          savedTags.map((t) => (
            <SavedTags tag={t.tag} properties={t.properties} />
          ))}
        {savedTags.length < 1 && (
          <p>
            You have no power tags saved. Start by type /Create power tag on a
            block with a tag that you want to convert to a power tag
          </p>
        )}
        {/* End content here */}
      </div>
    </div>
  );
}
