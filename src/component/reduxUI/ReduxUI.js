import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  cancelTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from '../../redux/actions';
import ReduxItem from './ReduxItem';

const ReduxUI = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const data = useSelector((state) => state);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const handleEventEnter = (e) => {
    const name = e.target.value;

    const id = data.length === 0 ? 1 : data[data.length - 1].id + 1;

    if (e.key === 'Enter') {
      setText('');
      dispatch(addTodo({ id: id, name: name, isUpdate: false }));
    }
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelTodo(id));
  };

  const handleUpdate = (id, text) => {
    dispatch(
      updateTodo({
        id: id,
        name: text,
        isUpdate: false,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>App Redux</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        value={text}
        placeholder="Nhập tên: "
        onChange={(e) => changeText(e)}
        onKeyUp={(e) => handleEventEnter(e)}
      />

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>List Data</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item) => (
                <ReduxItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  isUpdate={item.isUpdate}
                  funcEdit={() => handleEdit(item.id)}
                  funcUpdate={handleUpdate}
                  funcCancel={() => handleCancel(item.id)}
                  funcDelete={() => handleDelete(item.id)}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReduxUI;
