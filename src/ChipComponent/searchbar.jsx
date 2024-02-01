import { useState } from "react";

const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const mailDetail = [
    { name: "Anshu", mailid: "anshugupta08@gmail.com" },
    { name: "Manoj", mailid: "Manoj@gmail.com" },
    { name: "deepak", mailid: "Deepak@gmail.com" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    mailDetail.filter((mail) => {
      return mailDetail.name.match(searchInput);
    });
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    </>
  );
};

export default searchBar;
