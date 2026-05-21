import React from "react";

const User = ({ firstName, lastName, city }) => {
    
  return (
    <React.Fragment>
      <p>
        My name is {firstName} {lastName}, living in {city}
      </p>
    </React.Fragment>
  );
};

export default User;
