import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ReduxItem.css';

const ReduxItem = ({
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

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      funcUpdate(id, nameTemp);
    }
  };

  return (
    <>
      {isUpdate ? (
        <tr>
          <td className="ReduxItem__Id">{id}</td>
          <td className="ReduxItem__Name">
            <input
              className="form-control"
              type="text"
              value={nameTemp}
              onChange={(e) => changeName(e)}
              onKeyUp={(e) => handleEnter(e)}
            />
          </td>
          <td className="ReduxItem__Button">
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
          <td className="ReduxItem__Id">{id}</td>
          <td className="ReduxItem__Name">{name}</td>
          <td className="ReduxItem__Button">
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

export default ReduxItem;

ReduxItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isUpdate: PropTypes.func.isRequired,
  funcUpdate: PropTypes.func.isRequired,
  funcCancel: PropTypes.func.isRequired,
  funcEdit: PropTypes.func.isRequired,
  funcDelete: PropTypes.func.isRequired,
};
