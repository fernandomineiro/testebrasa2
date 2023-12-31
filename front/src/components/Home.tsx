import React, { useState, useEffect } from "react";

import userService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    userService.getItem().then(
      (response:any) => {
        console.log(response)
        setContent(response.data);
      },
      (error:any) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent('');
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {content == '' ? 'Bem vindo ao sistema!' :   <h3>testando</h3> }

      </header>
    </div>
  );
};






export default Home;
