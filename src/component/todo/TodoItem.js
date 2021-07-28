import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({
  id,
  name,
  isUpdate,
  funcUpdate,
  funcCancel,
  funcEdit,
  funcDelete,
}) => {
  const [nameTemp, setNameTemp] = useState(name);
  const changeName = (e) => {
    setNameTemp(e.target.value);
  };

  return (
    <>
      {isUpdate ? (
        <tr>
          <td className="TodoItem__Id">{id}</td>
          <td className="TodoItem__Name">
            <input
              className="form-control"
              type="text"
              value={nameTemp}
              onChange={(e) => changeName(e)}
            />
          </td>
          <td className="TodoItem__Button">
            <input
              className="btn btn-primary"
              type="button"
              value="Update"
              onClick={() => funcUpdate(id, nameTemp)}
            />
            <input
              className="btn btn-default"
              type="button"
              value="Cancel"
              onClick={funcCancel}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td className="TodoItem__Id">{id}</td>
          <td className="TodoItem__Name">{name}</td>
          <td className="TodoItem__Button">
            <input
              className="btn btn-warning"
              type="button"
              value="Edit"
              onClick={funcEdit}
            />
            <input
              className="btn btn-danger"
              type="button"
              value="Delete"
              onClick={funcDelete}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default TodoItem;
