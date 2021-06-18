import { NavLink } from "react-router-dom";

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon, HeartIcon } from "@heroicons/react/outline";

const navigation = ["Projects", "About"];

function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <HeartIcon className="h-8 w-8 text-red-400" alt="Workflow" />
                <p className="text-red-400 text-xl pl-2.5 font-bold">
                  Raya Kreasi
                </p>

                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item, itemIdx) =>
                      itemIdx === 0 ? (
                        <Fragment key={item}>
                          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                          {
                            <NavLink
                              to={{
                                pathname: "/",
                              }}
                              exact={true}
                              className="text-gray-300 hover:bg-gray-700 hover:text-white  no-underline "
                              activeClassName="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-normal no-underline"
                            >
                              {item}
                            </NavLink>
                          }
                        </Fragment>
                      ) : (
                        <NavLink
                          key={item}
                          to={{
                            pathname: "/about",
                          }}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white  no-underline"
                          activeClassName="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-normal no-underline"
                        >
                          {item}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={item}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                    <NavLink
                      to={{
                        pathname: "/",
                      }}
                      className="bg-gray-500 text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                      activeClassName="bg-gray-900 text-white"
                    >
                      {item}
                    </NavLink>
                  </Fragment>
                ) : (
                  <NavLink
                    key={item}
                    to={{
                      pathname: "/about",
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                    activeClassName="bg-gray-900 text-white"
                  >
                    {item}
                  </NavLink>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
