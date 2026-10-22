import Image from "next/image";
import { tools } from "../lib/tools";

export default function ToolLogos() {
  return (
    <div className="tools">
      <p className="eyebrow">Tools and platforms I work with</p>
      <ul className="tool-row">
        {tools.map((tool) => (
          <li key={tool.name}>
            <Image
              src={tool.src}
              alt={`${tool.name} logo`}
              width={tool.width}
              height={tool.height}
              sizes="120px"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
