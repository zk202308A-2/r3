function BasicLayout({children}) {
    return ( 
<>
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-xl font-bold">로고</div>
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="text-white">로그인</a>
        <a href="#" className="text-white">메인</a>
        <a href="#" className="text-white">상품</a>
      </div>
      
      <div className="md:hidden">
        <button className="text-white" id="menu-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div id="mobile-menu" className="hidden md:hidden bg-gray-800 p-4">
      <a href="#" className="block text-white py-2">로그인</a>
      <a href="#" className="block text-white py-2">메인</a>
      <a href="#" className="block text-white py-2">상품</a>
    </div>
  </nav>

  
  <div className="container mx-auto py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {children}
  </div>
</>  
     );
}

export default BasicLayout;