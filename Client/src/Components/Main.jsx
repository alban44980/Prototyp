import React, { useState, useEffect } from 'react';
import './Main.css';
import Form from './Form';
import FileItem from './FileItem';
import apiService from '../ApiService';

function Main() {
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    apiService.getAllFiles().then((data) => {
      console.log(data);
      setFiles(data);
    });
  }, [showForm]);

  return (
    <div className="main">
      {showForm && <Form setShowForm={setShowForm} />}

      <h1>Prototyp</h1>
      <table
        style={{
          borderWidth: '1px',
          borderColor: '#aaaaaa',
          borderStyle: 'solid',
          width: '500px',
        }}
      >
        <thead
          style={{
            borderWidth: '1px',
            borderColor: '#aaaaaa',
            borderStyle: 'solid',
          }}
        >
          <tr className="table-header">
            <th className="header-item">Type</th>
            <th className="header-item">Filename</th>
            <th className="header-item">Description</th>
            <th className="header-item">Uploaded By</th>
            <th className="header-item">Date</th>
          </tr>
        </thead>
        <tbody>
          {files ? (
            files.map((item) => {
              return (
                <FileItem key={item._id} file={item} setFiles={setFiles} />
              );
            })
          ) : (
            <h1>LOADING</h1>
          )}
        </tbody>
      </table>
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        UPLOAD
      </button>
    </div>
  );
}

export default Main;
