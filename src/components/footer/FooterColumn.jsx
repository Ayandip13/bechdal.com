export default function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-gray-400 hover:text-white hover:underline transition-colors text-sm"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
