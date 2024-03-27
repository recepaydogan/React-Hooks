import { useDeferredValue, useMemo } from "react";
import PropTypes from "prop-types";

const values = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
];
function Search({ inputValue }) {
  const deferredValue = useDeferredValue(inputValue);

  const filteredValues = useMemo(() => {
    const filterValues = (item) => item.includes(deferredValue);
    return values.filter(filterValues);
  }, [deferredValue]);

  return (
    <div>
      {filteredValues.length > 0 && deferredValue !== "" ? (
        filteredValues.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      ) : (
        <p>No result</p>
      )}
    </div>
  );
}
Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
export default Search;
