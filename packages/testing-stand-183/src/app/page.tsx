'use client';

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold">
            ✦
          </div>
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition font-medium">
            Start
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            Build Fast.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ship Faster.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The simplest way to turn ideas into reality.
          </p>
          <button className="px-10 py-5 bg-white text-black rounded-full hover:scale-105 transition text-lg font-semibold">
            Get Started →
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Fast</h3>
            <p className="text-gray-400">
              Deploy instantly
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Simple</h3>
            <p className="text-gray-400">
              No complexity
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-3">Beautiful</h3>
            <p className="text-gray-400">
              Looks amazing
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready?
          </h2>
          <button className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transition text-xl font-semibold shadow-2xl">
            Let's Go
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>Made with ✦</p>
        </div>
      </footer>
    </div>
  );
}








