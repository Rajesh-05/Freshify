import React, { useState } from 'react';

const IconBoxComponent = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const renderIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<span key={i} className="icon">⭐</span>);
    }
    return icons;
  };

  return (
    <div style={{ background: 'black', color: 'lightgreen', display: 'flex', flexDirection: 'column', alignItems: 'center' ,backgroundColor:'green'}}>
      <input type="text" value={input1} onChange={handleInputChange1} />
      <input type="text" value={input2} onChange={handleInputChange2} />
      <div className="icon-boxes">
        {renderIcons(input1)}
        {renderIcons(input2)}
      </div>
    </div>
  );
};

export default IconBoxComponent;