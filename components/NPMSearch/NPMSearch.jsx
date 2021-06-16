import { faAt } from "@fortawesome/free-solid-svg-icons";
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
  };

  return (
    <div>
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
    </div>
  );
};

export default NPMSearch;
