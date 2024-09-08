import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: 'John Doe', role: 'Software Engineer', text: 'ResumeAnalyzer helped me land my dream job at a top tech company!' },
  { name: 'Jane Smith', role: 'Marketing Manager', text: 'I was amazed by how accurately it matched my skills to job requirements.' },
];

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>What Our Users Say</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialItem}>
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <p className={styles.testimonialAuthor}>{testimonial.name}, {testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
