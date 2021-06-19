import { faBoxOpen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import InputWrapper from "../InputWrapper/InputWrapper";
import Spinner from "../Spinner/Spinner";

const NPMSearch = ({ state, dispatch }) => {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [deps, setDeps] = useState([]);

  const searchNpm = async (q) => {
    return await axios.get("http://localhost:3000/api/npmSearch", {
      params: { q },
    });
  };

  useEffect(() => {
    if (query.length === 0) {
      setQueryResults([]);
    }

    if (query.length > 1) {
      setSearching(true);
      const fn = async () => {
        const results = await searchNpm(query);
        if (results.data) {
          setQueryResults(results.data);
          setSearching(false);
        }
      };

      fn();
    }
  }, [query]);

  const installHandler = (p) => {
    dispatch({
      type: "update",
      data: {
        package: p,
      },
    });
    setDeps([...deps, p.name]);
  };

  const removePackage = (p) => {
    dispatch({
      type: "removeDep",
      data: {
        package: p,
      },
    });

    const clone = deps.filter((dep) => dep !== p);
    setDeps(clone);
  };
  return (
    <>
      <InputWrapper labelTitle="Add an NPM package">
        <Input
          type="search"
          value={query}
          placeholder="Search NPM..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputWrapper>

      {searching && (
        <div className="mt-4 mb-4">
          <Spinner />
        </div>
      )}

      {!searching &&
        queryResults.map((q, id) => (
          <div
            className="flex justify-between items-center p-2 query-result rounded-sm bg-gray-100 my-2 hover:border-pink-300 hover:border-2 border-2 border-transparent transition-all"
            key={id}
            onClick={() => installHandler(q)}
          >
            <p className="font-bold text-blue-800">{q.name}</p>
            <p className="text-pink-500 italic">{q.version}</p>
          </div>
        ))}

      {deps.length > 0 && (
        <div className="mt-6 flex flex-col">
          <p className="font-bold text-gray-600">Added dependencies</p>
          <hr />

          {deps.map((d) => (
            <div className="bg-gray-800 rounded-md p-2 px-4 mt-2 border-2 flex items-center justify-between">
              <div className="flex items-center w-full">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="text-yellow-300 mr-4 "
                  size="xs"
                />
                <p className="text-white">{d}</p>
              </div>

              <FontAwesomeIcon
                icon={faTrash}
                className="text-gray-400 hover:text-red-500 transition-all text-sm"
                onClick={() => removePackage(d)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NPMSearch;
