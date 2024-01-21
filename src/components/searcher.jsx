import { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { useSearchParams } from "react-router-dom";

export default function Searcher({currentLocationName}) {
  const [writing, setWriting] = useState(false);
  const searcherRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = async () => {
    setWriting(true);
  };

  useEffect(() => {
    const searcherElement = searcherRef.current;
    if (writing) {
      searcherElement.focus();
    }

    const handleClickOutside = (event) => {
      if (
        searcherElement &&
        !searcherElement.contains(event.target) &&
        event.target.tagName.toLowerCase() !== "span"
      ) {
        setSearchParams({ city: searcherElement.value });
        setWriting(false);
      }
    };

    const handleEnter = (event) => {
      if (event.key === "Enter") {
        setSearchParams({ city: searcherElement.value });
        setWriting(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEnter);
    };
  }, [writing]);
  return (
    <>
      {writing ? (
        <input
          ref={searcherRef}
          type="text"
          className="bg-transparent focus:outline-none w-40 focus:border-none px-5 searcher text-center"
          placeholder={searchParams.get("city") || currentLocationName}
          id="searcher"
        />
      ) : (
        <span
          className="cursor-pointer px-5 w-40 searcher text-center"
          onClick={handleClick}
        >
          <Typewriter
            component={"span"}
            options={{
              strings: [searchParams.get("city") || currentLocationName],
              autoStart: true,
              loop: true
            }}
          />
        </span>
      )}
    </>
  );
}
