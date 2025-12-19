"use client";

const tabs = [
  { label: "Home", id: "hero" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
  { label: "Education", id: "education" },

];

export default function SectionTabs() {
  return (
    <div className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto flex justify-center gap-8 py-4">
        {tabs.map(tab => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className="text-sm font-medium text-gray-600
              hover:text-emerald-600 transition"
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
