import React from 'react';
import './Documents.css'; // Add a CSS/SCSS file for styling

const Documents = () => {
  // Example document data
  const documents = [
    {
      id: 1,
      title: 'Company Policy',
      description: 'Detailed information about company policies.',
      uploadDate: '2024-12-10',
      fileUrl: '/documents/company-policy.pdf',
    },
    {
      id: 2,
      title: 'Employee Handbook',
      description: 'Comprehensive guide for employees.',
      uploadDate: '2024-12-05',
      fileUrl: '/documents/employee-handbook.pdf',
    },
    {
      id: 3,
      title: 'Holiday List 2024',
      description: 'List of official holidays for the year 2024.',
      uploadDate: '2024-12-01',
      fileUrl: '/documents/holiday-list-2024.pdf',
    },
  ];

  return (
    <div className="documents-page">
      <h1 className="page-title">Documents</h1>
      <div className="documents-list">
        {documents.map((document) => (
          <div key={document.id} className="document-card">
            <h2 className="document-title">{document.title}</h2>
            <p className="document-description">{document.description}</p>
            <p className="document-date">
              Uploaded on: {new Date(document.uploadDate).toLocaleDateString()}
            </p>
            <a
              href={document.fileUrl}
              className="document-download"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;