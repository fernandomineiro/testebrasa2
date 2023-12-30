import React, { useState, ChangeEvent } from "react";
import {postCreateItem} from "../services/user.service";


 interface Item {
    name?: any | null,
    data: any | null,
    status: Boolean,
  }

const AddItem = () => {
  const initialItemState = {
    name: "",
    data: "",
    status: false,
  };
  const [item, setItem] = useState<Item>(initialItemState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const saveItem = () => {
    var data = {
        name: item.name,
        data: item.data,
        status: false
    };

    postCreateItem(data)
      .then((response: any) => {
        setItem({
          name: response.data.name,
          data: response.data.data,
          status: response.data.status,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newItem = () => {
    setItem(initialItemState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newItem}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Nome</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={item.name}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">data</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={item.data}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveItem} className="btn btn-success">
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};



export default AddItem;