import React from "react";
// import useMutation from "react-query";

function CustomInput() {
  //   const { isLoading, isError, error, mutate } = useMutation(createPostArticle, {
  //     retry: 3,
  //   });

  const handleInputData = (event) => {
    event.preventDefault();
    const customForm = document.querySelector("form");
    const mydata = new FormData(customForm);
    let val = Object.fromEntries(mydata.entries());
    console.log(val);

    val.email = "collins";

    const loginData = {
      email: mydata.get("email"),
      password: mydata.get("password"),
    };
    console.log(val);
    console.log(loginData);
  };

  return (
    <form onSubmit={handleInputData}>
      <label htmlFor="email">Email</label>
      <br />
      <input name="email" type="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input name="password" type="password" />
      <input value="submit" type="submit" />
    </form>
  );
}

export default CustomInput;
