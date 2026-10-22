import { clients } from "../lib/clients";

export default function ClientLogos() {
  return (
    <div className="clients">
      <p className="eyebrow">Clients I've worked with</p>
      <ul className="client-grid">
        {clients.map((client) => (
          <li key={client.name}>
            <img src={client.src} alt={`${client.name} logo`} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}
