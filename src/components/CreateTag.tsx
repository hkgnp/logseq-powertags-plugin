import React, { useEffect, useState } from "react";

export default function CreateTag(props: { tag: string | number }) {
  const [tag, setTag] = useState<string | number>();
  const [properties, setProperties] = useState<string>("");
  const [propertyList, setPropertyList] = useState<string[]>([]);
  const [repeatTag, setRepeatTag] = useState<boolean>(false);

  useEffect(function () {
    setTag(props.tag);
    if (logseq.settings!.savedTags[props.tag]) {
      setRepeatTag(true);
    } else {
      setRepeatTag(false);
    }
  });

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setProperties(([e.target.name] = e.target.value));
  }

  function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (properties === "") {
        logseq.UI.showMsg(
          "Please key in at least one property or ensure a tag is selected",
          "error"
        );
        return;
      } else {
        const arr: string[] = properties
          .trim()
          .split(",")
          .map((p) => p.trim());
        setPropertyList((prevState) => [...prevState, ...arr]);
        setProperties("");
      }
    }
  }

  function saveProperty() {
    if (propertyList.length === 0) {
      logseq.UI.showMsg(
        "Please key in at least one property or ensure a tag is selected",
        "error"
      );
      return;
    } else {
      let tagsObj = logseq.settings!.savedTags;

      tagsObj[props.tag] = propertyList;

      logseq.updateSettings({
        savedTags: tagsObj,
      });

      setPropertyList([]);
      logseq.hideMainUI();
    }
  }
  return (
    <div className="flex justify-end p-3" tabIndex={-1}>
      <div
        className="absolute top-10 bg-white rounded-lg p-3 w-1/2 border text-sm"
        id="card"
      >
        <h1 className="text-xl mb-2">Create Power Tag</h1>

        {repeatTag && (
          <p className="mb-2">
            You have already created a power tag for this tag
          </p>
        )}

        {!repeatTag && (
          <React.Fragment>
            <div>
              {tag !== -1 && (
                <p className="mb-2">
                  Enter properties for{" "}
                  <span className="px-2 py-1 rounded-full text-xs text-white bg-blue-500">
                    {tag}
                  </span>{" "}
                  below
                </p>
              )}
              {tag === -1 && (
                <p className="mb-2">You have not selected a tag!</p>
              )}
              <input
                id="text-field"
                type="text"
                name="property"
                className="px-2 py-1 rounded-xl mb-3 w-full h-6"
                value={properties}
                onChange={handleForm}
                onKeyDown={(e) => handleSubmit(e)}
              />
            </div>

            <div>
              {propertyList.map((p) => (
                <span className="bg-blue-800 px-2 py-1 text-white rounded-full mr-1 text-xs">
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-4">
              {tag !== -1 && (
                <button
                  className="border border-purple-600 text-black px-1 rounded-md hover:text-white hover:bg-purple-600"
                  onClick={saveProperty}
                >
                  Save
                </button>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
