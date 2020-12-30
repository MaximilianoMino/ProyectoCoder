import React from 'react'
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Aqui no hay productos</h1>
      <p className="ml-4">
        Haga clic{" "}
        <Link to="/" className="font-weight-bold">
          aqui
        </Link>{" "}
        para continuar haciendo compras
      </p>{" "}
    </div>
  );
}

export default Error
