import React, { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    number: '',
    checkbox: false,
    radio: '',
    select: '',
    textarea: '',
    date: '',
    time: '',
    color: '#000000',
    range: 50,
    file: null,
    password: '',
    tel: '',
    url: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handling file input differently
    const formDataCopy = { ...formData, file: formData.file ? formData.file.name : null };
    console.log('Form Data:', formDataCopy);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Text: </label>
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Number: </label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Telephone: </label>
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>URL: </label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          Checkbox
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            value="option1"
            checked={formData.radio === 'option1'}
            onChange={handleChange}
          />
          Radio Option 1
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="option2"
            checked={formData.radio === 'option2'}
            onChange={handleChange}
          />
          Radio Option 2
        </label>
      </div>
      <div>
        <label>Select: </label>
        <select name="select" value={formData.select} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div>
        <label>Textarea: </label>
        <textarea
          name="textarea"
          value={formData.textarea}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date: </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Time: </label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Color: </label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Range: </label>
        <input
          type="range"
          name="range"
          value={formData.range}
          min="0"
          max="100"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>File: </label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
