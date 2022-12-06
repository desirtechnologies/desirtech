import useDrawer from "@controllers/hooks/useDrawer";
import type { ComponentType } from "@models/typings/Component";
import type { DrawerMenuProps } from "@models/typings/DrawerMenu";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';
import AnalogClock from 'analog-clock-react';

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

    let options = {
        width: "100px",
        border: true,
        borderColor: "#008000",
        baseColor: "#000000AA",
        centerColor: "#008000",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "#008000",
            minute: "#008000",
            hour: "#008000"
        }
    };
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
                                    src="/assets/images/logo.png"
                                    alt=""
                                />
                            </a>
                        </div>


                        <div className="flex items-center px-10 mb-10">
                            <a className="flex items-center ml-1" href="#">
                                <AnalogClock {...options} />
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