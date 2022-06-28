import React from "react";

function Header({ page, explore }) {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        zIndex: "100",
        padding: "1rem",
      }}
    >
      {explore ? (
        <input
          type="text"
          className="right__input"
          placeholder="Search twitter"
        ></input>
      ) : (
        <h3
          style={{
            fontSize: "1.3rem",
          }}
        >
          {page}
        </h3>
      )}
    </div>
  );
}

export default Header;
