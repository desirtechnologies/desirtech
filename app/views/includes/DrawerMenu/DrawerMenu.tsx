import useDrawer from "@controllers/hooks/useDrawer";
import type { ComponentType } from "@models/typings/Component";
import type { DrawerMenuProps } from "@models/typings/DrawerMenu";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';

const DrawerMenu: ComponentType<DrawerMenuProps> = ({ links, copyright }: DrawerMenuProps) => {

    const { drawer, toggleDrawer, closeDrawer } = useDrawer()



    const Copyright = () => {

        return (
            <div className="px-10 mt-auto">
                <button className="w-full px-5 py-3 mt-6 text-sm font-bold tracking-wide uppercase border-2 border-gray-200 border-opacity-50 rounded-full font-body hover:border-gray-300">
                    <span className="block mt-px">New project</span>
                </button>
                <p className="mt-6 mb-4 text-center">
                    <span className="text-sm text-darkBlueGray-400">
                        2021 © Uinel. All rights reserved.
                    </span>
                </p>
            </div>
        )
    }

    const Links = () => {

        return (
            <div>
                {
                    links ?
                        <ul>

                            {
                                links.map((link, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="px-10 mb-1">
                                            <a
                                                className="block py-4 pl-8 text-lg rounded-full text-body hover:shadow-2xl"
                                                href={link?.url ?? "#LINK_NOT_FOUND"}

                                            >
                                                {link?.name ?? "LINK_NOT_FOUND"}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul> : <>LINKS_NOT_FOUND</>
                }
            </div>

        )
    }

    const CloseButton = () => {

        return (
            <button onClick={() => closeDrawer()} className="absolute p-6 navbar-close group top-5 right-5">
                <div className="absolute top-3">
                    <span className="absolute w-px h-6 duration-500 transform -rotate-45 bg-white group-hover:rotate-45" />
                    <span className="absolute w-px h-6 duration-300 transform rotate-45 bg-white group-hover:-rotate-45" />
                </div>
            </button>
        )
    }

    return (

        <CSSTransition
            in={drawer}
            timeout={500}
            unmountOnExit >

            <div className="fixed top-0 bottom-0 left-0 z-50 w-5/6 max-w-sm navbar-menu backdrop-blur-md">
                <ClickAwayListener onClickAway={() => toggleDrawer()}>
                    <nav className="relative flex flex-col w-full h-full py-8 overflow-y-auto font-mono text-white flicker-in-1">


                        <div className="flex items-center pl-16 mb-8">
                            <a className="text-2xl font-bold text-gray-800" href="#">
                                <img
                                    className="h-12"
                                    src="uinel-assets/logos/uinel-gray-black.svg"
                                    alt=""
                                />
                            </a>
                        </div>


                        <div className="flex items-center px-10 mb-10">
                            <a className="flex items-center ml-1" href="#">
                                <img
                                    className="ml-6"
                                    src="uinel-assets/elements/navigations/avatar-online.png"
                                    alt=""
                                />
                                <img
                                    className="ml-6"
                                    src="uinel-assets/elements/navigations/arrow-down-gray.svg"
                                    alt=""
                                />
                            </a>
                            <a className="ml-auto text-gray-400 hover:text-gray-500" href="#">
                                <svg
                                    width={20}
                                    height={23}
                                    viewBox="0 0 20 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 18.0121H19"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.87891 22H10.8789"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>


                        <Links />

                        <Copyright />

                        <CloseButton />
                    </nav>
                </ClickAwayListener>
            </div>

        </CSSTransition>


    )
}

export default DrawerMenu