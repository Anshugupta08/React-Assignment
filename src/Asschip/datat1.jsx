import { useState } from "react";

const TextBoxSearch = () => {
  const myData = [
    { name: "Deepak", email: "deepak0908@gmail.com" },
    { name: "Avinash ", email: "Avimalviya990@gmail.com" },
    { name: "Sangeeta", email: "sangeet5876@gmail.com" },
    { name: "Manoj", email: " Maojbhai0@gmail.com" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredResults = myData
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    setSearchResults(filteredResults);
  };

  const handleNameClick = (name) => {
    setSelectedNames([...selectedNames, name]);
    setSearchTerm("");
  };

  const handleRemoveName = (name) => {
    const updatedNames = selectedNames.filter(
      (selectedName) => selectedName !== name
    );
    setSelectedNames(updatedNames);
  };

  const handleAddToTextBox = (name) => {
    setSelectedNames([...selectedNames, name]);
    setSearchTerm("");
  };

  return (
    <div>
      <h2>Text Box </h2>
      <input
        type="text"
        placeholder="Type a name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />

      <div>
        {selectedNames.map((name, index) => (
          <div key={index} style={{ display: "inline-block", margin: "4px" }}>
            <span>{name}</span>
            <span
              style={{ cursor: "pointer", marginLeft: "4px" }}
              onClick={() => handleRemoveName(name)}
            >
              &#x2716;
            </span>
          </div>
        ))}
      </div>

      <div>
        {searchResults.map((user, index) => (
          <div
            key={index}
            onClick={() => handleAddToTextBox(user.name)}
            style={{ cursor: "pointer" }}
          >
            <p>
              <strong>{user.name}</strong> - {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBoxSearch;
