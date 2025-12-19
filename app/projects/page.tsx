const projects = [
  {
    title: "ASTOR – Humanoid Robot",
    desc: "Voice-modulated humanoid robot integrating AI and robotics systems.",
  },
  {
    title: "Bionic Hand",
    desc: "Gesture-controlled bionic hand mimicking real-time movements.",
  },
  {
    title: "Smart Inventory App",
    desc: "Application for fast identification of sensors and components.",
  },
];

export default function Projects() {
  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-[#121212] p-6 rounded-xl hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
