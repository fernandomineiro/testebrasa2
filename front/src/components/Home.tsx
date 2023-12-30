import React, { useState, useEffect } from "react";

import { getPublicContdsfsdent } from "../services/user.service";

const Home: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    getPublicContdsfsdent().then(
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
