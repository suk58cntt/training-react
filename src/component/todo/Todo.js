import React, { useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'react', isUpdate: false },
    { id: 2, name: 'redux', isUpdate: false },
    { id: 3, name: 'saga', isUpdate: false },
  ]);

  const changeText = (e) => {
    setText(e.target.value);
  };

 const handleEventEnter = (e) => {
    if (e.key === 'Enter') {
      const { value } = e.target;
      const newData = [...data];

      const id = newData.length === 0 ? 1 : newData[newData.length - 1].id + 1;

      const payload = {
        id: id,
        name: value,
        isUpdate: false,
      };

      setText('');
      newData.push(payload);
      setData(newData);
    }
  }; 

  const handleEdit = (id) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isUpdate = true;
      }
    });
    setData(newData);
  };

  const handleCancel = (id) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isUpdate = false;
      }
    });
    setData(newData);
  };

  const handleUpdate = (id, text) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isUpdate = false;
        item.name = text;
      }
    });
    setData(newData);
  };

  const handleDelete = (id) => {
    const index = data.findIndex((x) => x.id === id);

    if (index < 0) return;

    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      <h1>App Todo</h1>
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
            {data.map((item) => (
              <TodoItem
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

export default Todo;
