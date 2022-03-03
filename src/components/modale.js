import React from "react";
import { useForm } from "react-hook-form";
import {
  ModaleBackground,
  ModaleContainer,
  Input,
  Button,
} from "../style/modaleStyle";

function Modale(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <ModaleBackground>
      <ModaleContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>ID</label>
          <Input
            type="number"
            defaultValue={props?.datas.id}
            {...register("id")}
          ></Input>
          <label>title</label>
          <Input
            type="text"
            defaultValue={props?.datas.title}
            {...register("title")}
          ></Input>
          <label>Price</label>
          <Input
            type="number"
            defaultValue={props?.datas.price}
            {...register("price")}
          ></Input>
          <label>Description</label>
          <Input
            type="text"
            defaultValue={props?.datas.description}
            {...register("category")}
          ></Input>
          <Button onClick={props?.back}>Submit</Button>
          <Button onClick={props?.close}>close</Button>
        </form>
      </ModaleContainer>
    </ModaleBackground>
  );
}

export default Modale;
