import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      if (debouncedTerm) { // Only search if there's a term
        try {
          const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
              action: "query",
              list: "search",
              origin: "*",
              format: "json",
              srsearch: debouncedTerm,
            },
          });

          if (data.query) {
            setResults(data.query.search);
          } else {
            setResults([]);
          }
        } catch (error) {
          console.error("Error fetching data from Wikipedia API", error);
          setResults([]);
        }
      }
    };

    search();
  }, [debouncedTerm]);


  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
        <div className="ui celled list">{renderResults}</div>
      </div>
    </div>
  );
};

export default Search;
