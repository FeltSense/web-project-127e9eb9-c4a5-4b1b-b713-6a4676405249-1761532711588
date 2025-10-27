export default function Pricing() {
  return (
    ```jsx
<section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Plans</h2>
      <p className="text-xl text-gray-600">Join our culinary community and enjoy exclusive benefits</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Appetizer Tier */}
      <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-amber-500 transition-all duration-300">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Appetizer</h3>
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl font-bold text-gray-900">$29</span>
            <span className="text-gray-600 ml-2">/month</span>
          </div>
          <p className="text-gray-600">Perfect for food enthusiasts</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Access to 50+ recipes monthly</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Weekly cooking tips newsletter</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Community forum access</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">10% off merchandise</span>
          </li>
        </ul>
        <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
          Get Started
        </button>
      </div>

      {/* Main Course Tier - Featured */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-2xl p-8 border-2 border-amber-600 transform md:scale-105 relative">
        <div className="absolute top-0 right-0 bg-white text-amber-600 px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold text-sm">
          MOST POPULAR
        </div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Main Course</h3>
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl font-bold text-white">$59</span>
            <span className="text-amber-100 ml-2">/month</span>
          </div>
          <p className="text-amber-100">For passionate home chefs</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Unlimited recipe access</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Live cooking classes (2/month)</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Personalized meal planning</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Exclusive video tutorials</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">20% off merchandise & events</span>
          </li>
        </ul>
        <button className="w-full bg-white text-amber-600 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
          Get Started
        </button>
      </div>

      {/* Chef's Table Tier */}
      <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-amber-500 transition-all duration-300">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Chef's Table</h3>
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl font-bold text-gray-900">$99</span>
            <span className="text-gray-600 ml-2">/month</span>
          </div>
          <p className="text-gray-600">Ultimate culinary experience</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Everything in Main Course</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">1-on-1 chef consultations</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Unlimited live classes</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Quarterly ingredient box delivery</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">VIP event invitations</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">30% off all purchases</span>
          </li>
        </ul>
        <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-gray-600 mb-4">All plans include a 14-day money-back guarantee</p>
      <p className="text-sm text-gray-500">Need a custom plan? <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">Contact us</a></p>
    </div>
  </div>
</section>
  );
}