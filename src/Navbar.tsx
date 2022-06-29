import React from 'react';
import {Disclosure,} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import Link from "next/link";
import {useRouter} from "next/router";


export default function Navbar() {
    const router = useRouter();
    const routeList = [{name: 'Home', href: '/',}, {name: 'About Us', href: '/about-us',}, {
        name: 'Features',
        href: '/features',
    }, {name: 'Pricing', href: '/pricing',}, {name: 'FAQ', href: 'faq',}, {name: 'Blog', href: 'blog',}];

    const _renderRoutes = () => {
        return routeList.map(route => {
            const isRouteActive = router.route === route.href;
            return (<Link key={route.href} href={route.href}>
                <a
                    className={`${isRouteActive ? 'text-blue1' : 'border-transparent text-gray1'} capitalize inline-flex items-center px-1 pt-1 text-xsm font-base`}
                >
                    {route.name}
                </a>
            </Link>);
        });
    };

    const _renderHamburgerMenuRoutes = () => {
        return routeList.map(route => {
            // This needs refactoring
            const isRouteActive = router.route === route.href;
            return (<Link key={route.href} href={route.href}>
                <Disclosure.Button
                    as={'a'}
                    href="#"
                    className={`${isRouteActive ? 'bg-indigo-50 border-indigo-500 text-blue1' : 'border-transparent text-gray1 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 '} capitalize block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                >
                    {route.name}
                </Disclosure.Button>
            </Link>);
        });
    };

    return (
        <Disclosure as="nav" className="bg-white shadow fixed top-0 left-0 right-0 z-20">
            {({open}) => (
                <>
                    <div className="mx-auto px-32 2xl:px-40">
                        <div className="flex justify-end h-18.4">
                            <div className="flex ">
                                <div className="hidden sm:ml-6 sm:flex items-center sm:space-x-8">
                                    {_renderRoutes()}
                                    <Link
                                        href='/contact-us'
                                    >
                                        <div
                                            className='flex items-center justify-center bg-yellow1 text-black text-xsm h-12 w-37 cursor-pointer'
                                        >
                                            Contact Us
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {_renderHamburgerMenuRoutes()}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );

}
