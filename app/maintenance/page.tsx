export default function MaintenancePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">
          🚧 Site Under Maintenance
        </h1>

        <p className="text-gray-300 mb-6">
          We are currently making improvements. Please check back soon.
        </p>

        <p className="text-sm text-gray-400">
          — Jenil Sojitra
        </p>
      </div>
    </div>
  );
}