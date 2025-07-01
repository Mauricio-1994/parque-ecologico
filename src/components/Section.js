import React from 'react';

function Section({ title, children }) {
  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default Section;
