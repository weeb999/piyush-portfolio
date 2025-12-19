"use client";

const tabs = [
  { label: "Home", id: "hero" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function TopTabs() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center gap-8 py-4 text-sm font-medium">
          {tabs.map(tab => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                className="text-gray-700 hover:text-emerald-600
                transition-colors"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
