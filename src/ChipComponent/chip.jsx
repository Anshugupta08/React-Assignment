import { useState } from "react";

function Searchbar() {
  const [query, setQuery] = useState("");

  const mailData = [
    { index: 1, name: "Anshu", mailid: "anshugupta08@gmail.com" },
    { index: 2, name: "Manoj", mailid: "Manoj@gmail.com" },
    { index: 3, name: "deepak", mailid: "Deepak@gmail.com" },
  ];

  {
    mailData
      .filter((mail) => {
        if (query === "") {
          return mail;
        } else if (mail.title.toLowerCase().includes(query.toLowerCase())) {
          return mail;
        }
      })
      .map((mail, index) => (
        <div className="box" key={index}>
          <p>{mail.title}</p>
          <p>{mail.author}</p>
        </div>
      ));
  }
  return (
    <>
      <div>
        <input
          placeholder=""
          onChange={(event) => setQuery(event.target.value)}
        />
        {mailData.map((name, index) => {
          <div key={index}>
            <p>{mailData.name}</p>
            <p>{mailData.mailid}</p>
          </div>;
        })}
      </div>
    </>
  );
}

export default Searchbar;
