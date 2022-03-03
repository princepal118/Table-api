import React from "react";
// import { Table, Button, Th, Td, Input, Label, ButtonM } from "../style/body";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
const Body = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [input, setInput] = useState([]);
  const get = () => {
    axios("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    get();
  }, []);
  const handleRemoveItem = (id) => {
    setData(data.filter((data) => data.id !== id));
  };
  const saveText = () => {
    fetch("https://fakestoreapi.com/carts/7", {
      method: "PUT",
      body: JSON.stringify({
        title: input?.title,
        description: input?.description,
        price: input?.price,
        category: input?.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Table id="table">
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Category</Th>
          </tr>
        </thead>
        {data.map((row) => (
          <tbody>
            <tr>
              <Td>{row.id}</Td>
              <Td>{row.title}</Td>
              <Td>{row.description}</Td>
              <Td>{row.price}</Td>
              <Td>{row.category}</Td>
              <Td>
                <Button
                  onClick={() => {
                    setModalIsOpen(true);
                    setInput(row);
                  }}
                >
                  Edit
                </Button>
              </Td>
              <Td>
                <Button onClick={() => handleRemoveItem(row.id)}>Delete</Button>
              </Td>
            </tr>
            <ReactModal input={row} isOpen={modalIsOpen}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Title</Label>
                <Input
                  type="text"
                  defaultValue={input?.title}
                  {...register("title")}
                ></Input>
                <Label>Description</Label>
                <Input
                  type="text"
                  defaultValue={input?.description}
                  {...register("description")}
                ></Input>
                <Label>Price</Label>
                <Input
                  type="text"
                  defaultValue={input?.price}
                  {...register("price")}
                ></Input>
                <Label>Category</Label>
                <Input
                  type="text"
                  defaultValue={input?.category}
                  {...register("category")}
                ></Input>
                <ButtonM type="submit" onClick={saveText}>
                  Save
                </ButtonM>
                <ButtonM onClick={() => setModalIsOpen(false)}>Close</ButtonM>
              </form>
            </ReactModal>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default Body;
