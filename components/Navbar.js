import Search from "./Search"

export default function Navbar() {
    return (
        <nav className='bg-[#ffca2a] border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-800'>
          <div className='container flex flex-wrap justify-between items-center mx-auto mb-4'>
            <a href='https://wevatextile.com' className='flex items-center'>
              <img
                src='/img/logo_black.png'
                className='ml-4 h-6 sm:h-9'
                alt='Weva Textile Logo'
              />
            </a>
            <button data-collapse-toggle='mobile-menu' type='button' className='transition inline-flex items-center p-2 ml-3 text-sm text-gray-900 rounded-lg md:hidden hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='mobile-menu' aria-expanded='false' >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className='hidden w-72 md:block md:w-auto' id='mobile-menu'>
              <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                <li>
                  <a href='#' className='block py-2 pr-4 pl-3 text-white font-medium bg-yellow-400 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white'>Home</a>
                </li>
                <li>
                  <a href='#' className='block hover:rounded py-2 pr-4 pl-3 font-medium text-gray-700 border-b border-yellow-400 hover:bg-yellow-400 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>About Us</a>
                </li>
                <li>
                  <a href='#' className='block hover:rounded py-2 pr-4 pl-3 font-medium text-gray-700 border-b border-yellow-400 hover:bg-yellow-400 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Services</a>
                </li>
                <li>
                  <a href='#' className='block hover:rounded py-2 pr-4 pl-3 font-medium text-gray-700 border-b border-yellow-400 hover:bg-yellow-400 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Pricing</a>
                </li>
                <li>
                  <a href='#' className='block hover:rounded py-2 pr-4 pl-3 font-medium text-gray-700 border-b border-yellow-400 hover:bg-yellow-400 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Contact</a>
                </li>
              </ul>
            </div>
        </div>
        <Search />
        </nav>
    )
}
