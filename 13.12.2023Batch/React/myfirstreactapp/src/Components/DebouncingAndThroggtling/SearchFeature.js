import { useRef } from "react";

export const SearchFeature = () => {
  let timer;
  const inputRef = useRef(null);
  const handleSearch = () => {
    let searchData = inputRef?.current?.value;
    fetch(`https://example.com?search=${searchData}`)
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((res) => console.log(res, "response", searchData));
  };

  const handleDebounce = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleSearch();
    }, 300);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="search" onKeyUp={handleDebounce} />
    </div>
  );
};
