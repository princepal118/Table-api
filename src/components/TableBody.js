import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Modale from "./modale";

function TableBody() {
  const [dataTable, setdataTable] = useState([]);
  const [modalData, setModaleData] = useState(false);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setdataTable(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const openModal = (item) => {
    setModaleData(true);
    setDisplay(item);
  };

  // function editData() {
  //   setModaleData(true);
  // }

  const closeModale = () => {
    setModaleData(false);
  };
  const Gets = (value) => {
    console.log("get back", value);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>

        {dataTable.map((item, i) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{item.id}.</td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      src={item.image}
                      style={{ width: 100, height: 100 }}
                    ></img>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        setdataTable(
                          dataTable.filter((_, index) => index !== i)
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <button onClick={() => openModal(item)}>Edit.</button>
                  </td>
                </tr>
                {modalData && (
                  <Modale
                    show={modalData}
                    close={closeModale}
                    datas={display}
                    back={Gets}
                  />
                )}
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}
export default TableBody;
