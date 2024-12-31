import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Support ticket submitted. We will get back to you soon!');
    setFormData({ name: '', email: '', issue: '', description: '' });
  };

  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: 'You can reset your password by clicking on "Forgot Password" on the login page.',
    },
    {
      question: 'How do I access my payroll details?',
      answer: 'Go to the "Payroll" tab in your dashboard to view your payroll information.',
    },
    {
      question: 'Whom do I contact for technical issues?',
      answer: 'For technical issues, you can raise a support ticket using this page or email support@company.com.',
    },
  ];

  return (
    <div className="support-container">
      <h2 className="support-header">Support</h2>

      {/* Support Form */}
      <div className="support-form-container">
        <h3>Raise a Support Ticket</h3>
        <form className="support-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
          <label>Issue</label>
          <input
            type="text"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            placeholder="Briefly describe the issue"
          />
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Provide more details about the issue"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="support-faq">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4 className="faq-question">{faq.question}</h4>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;