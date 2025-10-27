export default function Testimonials() {
  return (
    ```jsx
<section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
      <p className="text-lg text-gray-600">Hear from those who've experienced The Savory Table</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"The farm-to-table experience here is unmatched. Every ingredient tastes incredibly fresh, and you can tell the chef puts real thought into each dish. The seasonal menu keeps us coming back month after month!"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            MR
          </div>
          <div>
            <p className="font-semibold text-gray-900">Michael Rodriguez</p>
            <p className="text-sm text-gray-600">Food Blogger</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"We celebrated our anniversary here and the staff made it absolutely magical. The ambiance is warm and inviting, and the wine pairing recommendations were spot-on. Best dining experience we've had in years!"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            SC
          </div>
          <div>
            <p className="font-semibold text-gray-900">Sarah Chen</p>
            <p className="text-sm text-gray-600">Marketing Director</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"As someone with dietary restrictions, I'm always nervous trying new restaurants. The Savory Table went above and beyond to accommodate my needs without compromising on flavor. The gluten-free options are creative and delicious!"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            JT
          </div>
          <div>
            <p className="font-semibold text-gray-900">James Thompson</p>
            <p className="text-sm text-gray-600">Architect</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"I've been bringing my business clients here for two years now, and it never disappoints. The private dining room is perfect for meetings, the service is impeccable, and the menu offers something for everyone. It's become my go-to spot for impressing important guests."</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            EP
          </div>
          <div>
            <p className="font-semibold text-gray-900">Emily Patterson</p>
            <p className="text-sm text-gray-600">CEO, Patterson Consulting</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}