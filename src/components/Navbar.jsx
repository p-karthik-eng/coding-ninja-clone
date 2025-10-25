'use client'

import '../components/style.css'
import Logo from '../assets/logo.svg'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const products = [
  { name: 'Analytics', description: 'Understand your traffic better', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Talk directly to customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Secure your customers’ data', href: '#', icon: FingerPrintIcon },
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMouseEnter = (menu) => setOpenMenu(menu)
  const handleMouseLeave = () => setOpenMenu(null)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 sm:px-10 lg:px-20"
      >
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="Logo" src={Logo} className="h-8 w-auto" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Center Menus - Desktop */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-10 mx-auto">
          {/* Job Bootcamp */}
          <Popover
            as="div"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <>
              <PopoverButton
                className={`flex items-center gap-x-2 text-[18px] font-light text-gray-800 px-3 py-2 rounded-md transition focus:outline-none focus:ring-0
                ${openMenu === 'products' ? 'bg-gray-100' : ''}`}
              >
                Job Bootcamp
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-800" />
              </PopoverButton>

              {openMenu === 'products' && (
                <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              )}
            </>
          </Popover>

          {/* IIT Certificates */}
          <Popover
            as="div"
            onMouseEnter={() => handleMouseEnter('iit')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <>
              <PopoverButton
                className={`flex items-center gap-x-2 text-[18px] font-light text-gray-800 px-3 py-2 rounded-md transition focus:outline-none focus:ring-0
                ${openMenu === 'iit' ? 'bg-gray-100' : ''}`}
              >
                IIT Certificates
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
              </PopoverButton>

              {openMenu === 'iit' && (
                <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
                  <div className="p-4 text-gray-500">Add your IIT Certificates items here...</div>
                </PopoverPanel>
              )}
            </>
          </Popover>

          {/* New Launches */}
          <Popover
            as="div"
            onMouseEnter={() => handleMouseEnter('launch')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <>
              <PopoverButton
                className={`flex items-center gap-x-2 text-[18px] font-light text-gray-800 px-3 py-2 rounded-md transition focus:outline-none focus:ring-0
                ${openMenu === 'launch' ? 'bg-gray-100' : ''}`}
              >
                New Launches
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
              </PopoverButton>

              {openMenu === 'launch' && (
                <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
                  <div className="p-4 text-gray-500">Add your New Launches items here...</div>
                </PopoverPanel>
              )}
            </>
          </Popover>
        </PopoverGroup>

        {/* Right Button */}
        <div className="hidden lg:flex justify-end flex-1">
          <button className="text-white bg-[#ff6c37] hover:bg-[#ff8547] font-semibold rounded-md py-[7px] px-6">
            Log in
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 text-lg font-medium">
            Job Bootcamp
          </a>
          <a href="#" className="block text-gray-700 text-lg font-medium">
            IIT Certificates
          </a>
          <a href="#" className="block text-gray-700 text-lg font-medium">
            New Launches
          </a>
          <button className="w-full text-white bg-[#ff6c37] hover:bg-[#ff8547] font-semibold rounded-md py-2">
            Log in
          </button>
        </div>
      )}
    </header>
  )
}
