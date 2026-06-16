import styles from "./SocialLinks.module.css";

const socialMedia = [
  { name: "Instagram", label: "IG", url: "https://instagram.com/cafecafe" },
  { name: "Facebook", label: "FB", url: "https://facebook.com/cafecafe" },
  { name: "X", label: "X", url: "https://twitter.com/cafecafe" },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`${styles.socialLinks} ${className}`}>
      {socialMedia.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visita nuestro perfil en ${link.name}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
