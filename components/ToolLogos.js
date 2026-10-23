import { tools } from "../lib/tools";
import LogoMarquee from "./LogoMarquee";

export default function ToolLogos() {
  return <LogoMarquee label="Tools and platforms I work with" items={tools} className="tools" />;
}
