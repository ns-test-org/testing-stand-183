'use client';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            StartupName
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            🚀 Now in Beta
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Build Something
            <br />
            Amazing Today
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The modern platform for teams who want to ship faster, scale smarter, and build products that users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-medium shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition text-lg font-medium border-2 border-gray-200">
              Watch Demo
            </button>
          </div>
          <div className="mt-12 text-sm text-gray-500">
            Trusted by 10,000+ teams worldwide
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features to help you succeed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Built for speed. Deploy in seconds and scale instantly with our global infrastructure.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Secure by Default</h3>
              <p className="text-gray-600">
                Enterprise-grade security with automatic backups and 99.9% uptime guarantee.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Real-time Analytics</h3>
              <p className="text-gray-600">
                Get insights that matter. Track performance and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Join thousands of teams already building with us
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition text-lg font-medium shadow-lg">
            Start Building Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 StartupName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}







