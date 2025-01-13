import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const TableData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((value) => {
        setData(value);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.category}</td>
                  <td>{val.title}</td>
                  <td>{val.description}</td>
                  <td>
                    <img src={val.image} alt={`Image of ${val.title}`} />
                  </td>
                  <td>${(val.price / 5).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableData;
