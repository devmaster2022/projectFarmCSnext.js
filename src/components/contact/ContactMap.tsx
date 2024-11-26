import React from 'react';

export default function ContactMap() {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2839274129396!2d77.4720!3d23.2032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d0c1ce70b7%3A0x847b8a2f347a41c9!2sLNCT%20Group%20of%20Colleges!5e0!3m2!1sen!2sin!4v1647940434292!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
}