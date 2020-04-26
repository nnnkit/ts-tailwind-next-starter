import React, {useState} from 'react'

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <img className="h-8" src="/img/logo.svg" alt="Logo" />
        </div>
        <div>
          <button
            type="button"
            className="sm:hidden block text-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setIsMenuOpen(s => !s)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              {isMenuOpen ? (
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              ) : (
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`text-gray-200 ${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col font-semibold mt-2 px-2 sm:block sm:mt-0`}
      >
        <a className="hover:bg-gray-800 rounded px-2 py-1" href="#">
          Meditation
        </a>
        <a className="hover:bg-gray-800 rounded px-2 py-1" href="#">
          Books
        </a>
        <a className="hover:bg-gray-800 rounded px-2 py-1" href="#">
          Business
        </a>
        <a className="hover:bg-gray-800 rounded px-2 py-1 mb-2" href="#">
          Technology
        </a>
      </div>
    </header>
  )
}

export default AboutPage
