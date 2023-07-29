import React, { useState, useRef } from 'react';
import  upload  from './assets/upload.png';

const DropdownButton = () => {
  const dropdownItems = ['upload', 'ise', 'ia1', 'ia2', 'other', 'ca', 'lab', 'tw', 'ese', 'grade', 'total'];
  const [selectedItem, setSelectedItem] = useState(dropdownItems[0]);
  const fileInputRef = useRef(null);

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleUpload = () => {
    if (selectedItem !== 'upload') {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvContent = e.target.result;
        localStorage.setItem('uploadedCSV', csvContent);
        alert('File uploaded and saved as CSV in local storage.');
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <button onClick={handleUpload}>{selectedItem}</button> */}
      <select onChange={handleDropdownChange} style={{ margin: '0 10px' }}>
        {dropdownItems.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {selectedItem !== 'upload' && (
        <button onClick={handleUpload} style={{ border: 'none', background: 'none' }}>
          <img
            src={upload} // Replace with your upload icon image source
            alt="Upload"
            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          />
        </button>
      )}
    </div>
  );
};

export default DropdownButton;
