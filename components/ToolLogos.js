import { tools } from "../lib/tools";

export default function ToolLogos() {
  return (
    <div className="tools">
      <p className="eyebrow">Tools and platforms I work with</p>
      <ul className="tool-row">
        {tools.map((tool) => (
          <li key={tool.name}>
            <img src={tool.src} alt={`${tool.name} logo`} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}
