import { useState } from "react";

const ItemList = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [input, setInput] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    setShowDropdown(!!inputValue);
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInput("");
    setShowDropdown(false);
  };

  const handleChipRemove = (itemToRemove) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemToRemove));
  };

  const myData = [
    { name: "Deepak", email: "deepak0908@gmail.com" },
    { name: "Avinash ", email: "avimalviya990@gmail.com" },
    { name: "Sangeeta", email: "sangeet5876@gmail.com" },
    { name: "Manoj", email: " maojbhai0@gmail.com" },
    { name: "Ankit Jain", email: " ankitjain0@gmail.com" },
    { name: "Saroj", email: " saroj0@gmail.com" },
    { name: "jitendra", email: " jitendramaurya@gmail.com" },
    { name: "Nitesh", email: " niteshrai@gmail.com" },
  ];

  const filteredData = myData.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.email.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className="chip"
            onClick={() => handleChipRemove(item)}
          >
            {item.name}
            {"    "}
            <span className="close-icon" style={{ color: "red" }}>
              X
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type ..."
        onChange={handleInputChange}
        value={input}
        style={{
          marginTop: "10px",
          width: "300px",
          padding: "8px",
          border: "none",
        }}
      />
      {showDropdown && (
        <div className="dropdown">
          {filteredData.map((item, index) => (
            <div key={index} onClick={() => handleItemClick(item)}>
              {item.name}, {item.email}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
