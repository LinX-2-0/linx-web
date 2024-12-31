import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    department: 'Development',
    joinDate: 'Jan 1, 2021',
    employeeID: 'EMP123456',
    manager: 'Jane Smith',
    location: 'New York, USA',
    skills: ['React', 'Node.js', 'AWS', 'Docker'],
    projects: ['Project A', 'Project B', 'Project C'],
    certifications: ['AWS Certified Developer', 'Scrum Master Certification'],
    awards: ['Employee of the Month - June 2023', 'Best Innovator - 2022'],
    bio: 'Passionate about building scalable web applications and exploring cloud technologies.',
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/100" alt="Profile Avatar" />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-position">{user.position}</p>
          </div>
        </div>

        <div className="profile-details">
          <ul>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone}
            </li>
            <li>
              <strong>Department:</strong> {user.department}
            </li>
            <li>
              <strong>Join Date:</strong> {user.joinDate}
            </li>
            <li>
              <strong>Employee ID:</strong> {user.employeeID}
            </li>
            <li>
              <strong>Manager:</strong> {user.manager}
            </li>
            <li>
              <strong>Location:</strong> {user.location}
            </li>
          </ul>
        </div>

        <div className="profile-section">
          <h3>Skills</h3>
          <ul className="profile-skills">
            {user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h3>Projects</h3>
          <ul className="profile-projects">
            {user.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h3>Certifications</h3>
          <ul className="profile-certifications">
            {user.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h3>Awards & Recognitions</h3>
          <ul className="profile-awards">
            {user.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h3>Bio</h3>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;