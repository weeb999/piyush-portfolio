export default function Contact() {
  return (
    <main className="pt-32 px-6 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <form className="space-y-4">
        <input className="w-full p-3 bg-[#121212] rounded" placeholder="Name" />
        <input className="w-full p-3 bg-[#121212] rounded" placeholder="Email" />
        <textarea className="w-full p-3 bg-[#121212] rounded" placeholder="Message" />
        <button className="bg-blue-500 px-6 py-3 rounded font-semibold">
          Send Message
        </button>
      </form>
    </main>
  );
}
