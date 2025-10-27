export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjRjU5RTBCIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span>Locally Sourced • Seasonally Inspired</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Farm-to-Table Dining,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Delivered to Your Door</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Experience chef-curated dishes made with ingredients harvested this week from local farms. Our rotating seasonal menu brings you authentic flavors—whether you dine in, pick up, or have it delivered fresh.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto lg:mx-0">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-center sm:text-left">Weekly Menu Updates</h3>
            <p className="text-sm text-gray-600 text-center sm:text-left">New seasonal dishes every Monday based on harvest availability</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-center sm:text-left">Order in 60 Seconds</h3>
            <p className="text-sm text-gray-600 text-center sm:text-left">Quick mobile ordering with saved favorites and real-time prep tracking</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-center sm:text-left">Instant Table Booking</h3>
            <p className="text-sm text-gray-600 text-center sm:text-left">Reserve your spot online—no phone calls, no waiting on hold</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-200 transform hover:-translate-y-0.5">
            Order Pickup or Delivery
          </button>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-amber-300 transition-all duration-200">
            Reserve a Table
          </button>
        </div>
        
        <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>30-min pickup guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Free delivery over $35</span>
          </div>
        </div>
      </div>
      
      <div className="relative lg:h-[600px] h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-3"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-300 to-orange-300 rounded-3xl transform -rotate-3"></div>
        <div className="relative h-full bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1000&fit=crop" 
            alt="Fresh seasonal dishes from The Savory Table featuring locally sourced ingredients"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 mb-1">This Week's Feature</p>
                <h3 className="font-bold text-gray-900 text-lg">Heirloom Tomato Caprese</h3>
                <p className="text-sm text-gray-600">With basil from Miller's Farm</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">$16</p>
                <button className="mt-1 text-sm text-amber-600 font-semibold hover:text-amber-700">Add to Order →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}