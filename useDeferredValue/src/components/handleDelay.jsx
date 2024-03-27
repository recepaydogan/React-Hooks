import { useMemo, useDeferredValue } from "react";
import PropTypes from "prop-types";
function HandleInputDelay({ number }) {
  const deferredValue = useDeferredValue(number, { timeoutMs: 100000 });
  const myList = useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 20; i++) {
      myArray.push(<div key={i}>{deferredValue}</div>);
    }
    return myArray;
  }, [deferredValue]);
  return myList;
}

HandleInputDelay.propTypes = {
  number: PropTypes.number.isRequired,
};

export default HandleInputDelay;
