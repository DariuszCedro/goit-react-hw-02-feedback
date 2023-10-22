import React from 'react';
import '../Section/Section.css';

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

export default Section;
