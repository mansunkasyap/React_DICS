import React from 'react'
import axios from 'axios';
const Upload2 = () => {
      const [file, setFile] = React.useState(null);
      const [error, setError] = React.useState('');
      const [preview, setPreview] = React.useState(null);
    
      const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          const fileSizeLimit = 1024 * 1024 * 2; // 2MB
          const allowedTypes = ['image/jpeg', 'image/png'];
    
          if (!allowedTypes.includes(selectedFile.type)) {
            setError('File type not supported');
            setFile(null);
            setPreview(null);
            return;
          }
    
          if (selectedFile.size > fileSizeLimit) {
            setError('File size exceeds limit of 2MB');
            setFile(null);
            setPreview(null);
            return;
          }
    
          setError('');
          setFile(selectedFile);
          setPreview(URL.createObjectURL(selectedFile));
        }
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
    
          try {
            const response = await axios.post('/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log('File uploaded successfully:', response.data);
          } catch (error) {
            console.error('Error uploading file:', error);
          }
        } else {
          console.log('No file selected');
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Choose file:
            <input type="file" onChange={handleChange} />
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px' }} />}
          <button type="submit">Upload</button>
        </form>
      );
    };

export default Upload2