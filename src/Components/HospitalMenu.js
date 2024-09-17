import React from "react";
import "./Filter.css";

const ProductMenu = ({ filterItem, productList }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5 mb-5">
      <div className="container-fluid justify-content-center">

        <div className="navbar-nav " style={{ fontSize: '1.4rem' }}>
          {productList.map((curElem) => {
            return (
              <button style={{paddingLeft:'2.0rem'}}
                key={curElem}
                className="nav-link btn btn-link fw-bold"
                onClick={() => filterItem(curElem)} //filterItem is a function and curElem is the location arraow function is used to pass the location to the function
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ProductMenu;