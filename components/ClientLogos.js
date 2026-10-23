import { clients } from "../lib/clients";
import LogoMarquee from "./LogoMarquee";

export default function ClientLogos() {
  return <LogoMarquee label="Clients I've worked with" items={clients} className="clients" />;
}
