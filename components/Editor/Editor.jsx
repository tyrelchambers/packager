import React from "react";
import { useReducer, useState } from "react";
import { jsonReducer } from "../../reducers/jsonReducer";
import NPMSearch from "../NPMSearch/NPMSearch";
import { H1, H2 } from "../Headings/Headings";
import PackageProps from "../PackageProps/PackageProps";
import { packageProperties } from "../../constants/packageProperties";
import styles from "../../styles/editor.module.css";
import CodeEditor from "../CodeEditor/CodeEditor";
import ScreenTooSmall from "../ScreenTooSmall/ScreenTooSmall";

const initial = {
  name: "my_package",
  description: "",
  version: "1.0.0",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  keywords: [],
  author: "",
  license: "ISC",
};

const Editor = () => {
  const [state, dispatch] = useReducer(jsonReducer, initial);
  const [addedProperties, setAddedProperties] = useState([]);
  const [propOptions, setPropOptions] = useState(packageProperties);
  const bodyWidth = document.body.clientWidth;

  if (bodyWidth <= 1024) return <ScreenTooSmall />;

  const addHandler = (property) => {
    dispatch({
      type: "addProperty",
      data: {
        ...property,
      },
    });
    setAddedProperties([...addedProperties, property]);
    removePropOptionHandler(property);
  };

  const removeHandler = (property) => {
    dispatch({
      type: "removeProperty",
      data: {
        ...property,
      },
    });
  };

  const removePropOptionHandler = (property) => {
    const clone = propOptions.filter((p) => p.label !== property.label);
    setPropOptions(clone);
  };

  const removeAddedProperty = (property) => {
    removeHandler(property);
    const clone = addedProperties.filter((p) => p.label !== property.label);
    setAddedProperties(clone);
    setPropOptions([...propOptions, property]);
  };
  return (
    <div className="grid grid-cols-4 p-8 gap-10 justify-center h-screen w-full overflow-hidden">
      <div className="h-full col-span-1 flex flex-col">
        <H1 className="text-3xl lobster text-gradient">Packagr</H1>
        <p className=" text-gray-500 mt-2">
          Use this tool to generate your perfect package.json file!
        </p>

        <div className={styles.header_content}>
          <NPMSearch state={state} dispatch={dispatch} />

          <div className="mt-8 h-1/3">
            <H2>Properties</H2>
            <p className="text-sm text-gray-500">
              Add additional properties to package.json
            </p>
            {addedProperties
              .sort((a, b) => {
                if (a.label < b.label) return -1;
                if (a.label > b.label) return 1;
                return 0;
              })
              .map((pkg, id) => (
                <PackageProps
                  pkg={pkg}
                  clickHandler={removeAddedProperty}
                  key={id}
                  data-index={id}
                />
              ))}
            {addedProperties.length > 0 && <hr style={{ marginTop: "1em" }} />}
            <div className="mt-2 ">
              {propOptions
                .sort((a, b) => {
                  if (a.label < b.label) return -1;
                  if (a.label > b.label) return 1;
                  return 0;
                })
                .map((pkg) => (
                  <PackageProps pkg={pkg} clickHandler={addHandler} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-3">
        <CodeEditor
          initial={JSON.stringify(state, null, 2)}
          value={JSON.stringify(state, null, 2)}
        />
      </div>
    </div>
  );
};

export default Editor;
