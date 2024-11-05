import React from 'react'

const Upload1 = () => {
    const [file, setFile] = React.useState(null);
  
    const handleChange = (event) => {
      console.log(event);
      setFile(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (file) {
        console.log('Selected File:', file.name);
      } else {
        console.log('No file selected');
      }
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Choose file:
          <input type="file" onChange={handleChange} />
        </label>
        <button type="submit">Upload</button>
      </form>
    );
}

export default Upload1