export default function PageHead({ eyebrow, title, lead }) {
  return (
    <header className="page-head">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
