import React from 'react';
import './announcements.scss'; // Add a CSS/SCSS file for styling

const Announcements = () => {
  // Example announcement data
  const announcements = [
    {
      id: 1,
      title: 'Holiday Announcement',
      date: '2024-12-15',
      description: 'The office will remain closed on December 25th for Christmas.',
    },
    {
      id: 2,
      title: 'New Policy Update',
      date: '2024-12-10',
      description: 'We have updated our remote work policy. Please check your email for details.',
    },
    {
      id: 3,
      title: 'Team Building Activity',
      date: '2024-12-20',
      description: 'Join us for a fun team-building activity this Friday at 4 PM in the main conference hall.',
    },
  ];

  return (
    <div className="announcements-page">
      <h1 className="page-title">Announcements</h1>
      <div className="announcements-list">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-card">
            <h2 className="announcement-title">{announcement.title}</h2>
            <p className="announcement-date">{new Date(announcement.date).toLocaleDateString()}</p>
            <p className="announcement-description">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;