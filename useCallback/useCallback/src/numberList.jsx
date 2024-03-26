import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function NumberList({ items }) {
  useEffect(() => {
    setAllItems(items(5));
    console.log("Items changed");
  }, [items]);
  const [allItems, setAllItems] = useState([]);
  return (
    <div>
      {allItems.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

NumberList.propTypes = {
  items: PropTypes.func.isRequired,
};

export default NumberList;
