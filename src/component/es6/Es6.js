import React from 'react';

const Es6 = () => {
  return (
    <>
      <h1>Es6: Một phiên bản nâng cao của Javascript</h1> <hr />
      <div>
        <u>1. Variable</u>
        <ul>
          <li>
            <b>var:</b> global (ảnh hưởng mọi nơi) và địa phương - local (chỉ
            ảnh hưởng bên trong function).
          </li>
          <li>
            <b>let:</b> có tác dụng phạm vi bên trong một khối
          </li>
          <li>
            <b>const:</b> có giá trị không đổi trong suốt ứng dụng.
          </li>
        </ul>
        <u>2. Spread syntax</u>: tạo ra array hoặc object mới bao gồm giá trị
        của array, object cũ + giá trị mới bằng cách sử dụng [...oldArray, 4, 5]
      </div>
    </>
  );
};

export default Es6;
