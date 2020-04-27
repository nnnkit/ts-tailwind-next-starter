import React, {useState} from 'react'
import Transition from '../components/Transition'

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className="bg-white sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-between items-center px-4 py-3">
          <div>
            <img className="h-8" src="/img/logo.svg" alt="Logo" />
          </div>
          <div>
            <button
              type="button"
              className="sm:hidden block text-gray-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              onClick={() => setIsMenuOpen(s => !s)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                {isMenuOpen ? (
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                ) : (
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute p-2 top-0 inset-x-0">
          {isMenuOpen ? (
            <Transition
              show={isMenuOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MobileMenu
                isMobileMenu={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </Transition>
          ) : (
            ''
          )}
        </div>
      </header>
      <div className="bg-gray-400 h-screen"></div>
    </div>
  )
}

const MobileMenu = ({setIsMenuOpen, isMenuOpen}) => {
  return (
    <div className="rounded-lg bg-white shadow-lg bg-transparent">
      <div className="rounded shadow-xs px-4 py-3 divide-y-2 divide-gray-200 space-y-4">
        <div>
          <div className="flex justify-between py-4">
            <div>
              <img className="h-8" src="/img/logo.svg" alt="Logo" />
            </div>
            <div>
              <button
                type="button"
                className="sm:hidden block text-gray-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                onClick={() => setIsMenuOpen(s => !s)}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex py-4">
            <nav className="space-y-8">
              <SingleMenu />
              <SingleMenu />
              <SingleMenu />
              <SingleMenu />
            </nav>
          </div>
        </div>
        <div>
          <div className="grid-cols-2 grid row-gap-8 col-gap-0 mt-4">
            <a href="" className="text-base leading-6">
              Blog
            </a>
            <a href="" className="text-base leading-6">
              Learn
            </a>
            <a href="" className="text-base leading-6">
              Books
            </a>
            <a href="" className="text-base leading-6">
              Business
            </a>
            <a href="" className="text-base leading-6">
              Tech
            </a>
            <a href="" className="text-base leading-6">
              Blog
            </a>
          </div>
          <span className="w-full inline-flex justify-center rounded-lg overflow-hidden shadow-xs mt-8">
            <button className="rounded-lg w-full px-4 py-3 px-4 py-2 bg-indigo-700 inline-flex items-center text-white border justify-center">
              Sign up for newsletter
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

const SingleMenu = () => {
  return (
    <a href="" className="flex items-center space-x-4">
      <div className="flex-shrink-0 h-12 w-12 rounded bg-indigo-500 flex justify-center items-center">
        <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        </svg>
      </div>
      <p className="text-gray-900 font-medium">Books</p>
    </a>
  )
}

export default AboutPage
