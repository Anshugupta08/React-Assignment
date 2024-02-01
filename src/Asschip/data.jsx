import React, { useState } from "react";

const TextBoxSearch = () => {
  const myData = [
    { name: "Deepak", email: "deepak0908@gmail.com" },
    { name: "Avinash ", email: "Avimalviya990@gmail.com" },
    { name: "Sangeeta", email: "sangeet5876@gmail.com" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredResults = myData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h2>Text Box Search</h2>
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
        {searchResults.map((user, index) => (
          <div key={index}>
            <p>
              {user.name},{user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBoxSearch;
