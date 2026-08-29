export default function SectionHeading({ eyebrow, title, description, align = 'left', theme = 'light' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'centered' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      {eyebrow ? <span className={`eyebrow ${theme === 'dark' ? 'eyebrow-dark' : ''}`}>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

