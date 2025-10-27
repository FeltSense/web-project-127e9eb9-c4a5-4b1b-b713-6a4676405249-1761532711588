export default function Services() {
  return (
    ```jsx
<section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Makes Us Special
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        At The Savory Table, we're committed to making your dining experience exceptional from start to finish
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Fresh, Seasonal Menu
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our chef curates a rotating menu featuring locally-sourced ingredients at their peak. From farm-fresh salads to hearty comfort classics, we offer something delicious for every palate and dietary preference.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Easy Online Ordering
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Craving The Savory Table at home? Order through our streamlined online platform for quick pickup or doorstep delivery. Track your order in real-time and enjoy restaurant-quality meals wherever you are.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-rose-500">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Hassle-Free Reservations
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Skip the wait and secure your table in seconds. Our simple reservation system lets you book your preferred date, time, and party size online or by phone—perfect for date nights, celebrations, or casual gatherings.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Convenient Location
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Find us easily in the heart of town with a spacious parking lot that accommodates all vehicles. No circling the block or parking stress—just pull in, park, and enjoy your meal with complete peace of mind.
        </p>
      </div>
    </div>

    <div className="mt-12 text-center">
      <a href="#contact" className="inline-block bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
        Experience The Savory Table Today
      </a>
    </div>
  </div>
</section>
  );
}