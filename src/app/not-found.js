export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-3xl font-bold text-text mb-4">404 - Page Not Found</h2>
      <p className="text-text-muted mb-8">Could not find the requested resource.</p>
      <a href="/" className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
        Return Home
      </a>
    </div>
  );
}
