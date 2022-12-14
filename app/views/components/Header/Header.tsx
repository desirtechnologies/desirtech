/* eslint-disable @next/next/no-img-element */
import SearchIcon from '@mui/icons-material/Search';
import type { ComponentType } from "@typings/Component";
import type { HeaderProps } from "@typings/Header";
import Headroom from "react-headroom";

import useDrawer from "@hooks/useDrawer";

const Header: ComponentType<HeaderProps> = ({ favicon, links, sX }: HeaderProps) => {

    const { toggleDrawer } = useDrawer()

    const Links = () => {
        return (
            <div className="flex items-center">
                <button onClick={() => toggleDrawer()} className="hidden px-4 mx-auto mr-20 navbar-burger xl:block focus:outline-none">
                    <div className="relative flex flex-col ease-in-out group hover:opacity-90" >
                        <span className="w-px h-8 -mb-10 duration-300 rotate-90 bg-white group-hover:-rotate-45" />
                        <span className="w-px h-8 -mb-10 duration-200 transform rotate-90 bg-white group-hover:rotate-45" />
                        <span className="w-px h-8 delay-100 rotate-90 bg-white group-hover:-rotate-45" />
                    </div>
                </button>
                <ul className="hidden px-4 mx-auto tracking-tight xl:flex">
                    {
                        links ? links.map((link, index) => {
                            return (
                                <li key={index} className="pb-px duration-500 ease-in-out hover:border-x hover:border-green-500 mr-11 border-opacity-40 group">
                                    <a className="text-xl tracking-wide duration-500 ease-in-out group-hover:opacity-80 group-hover:bg-black " href={link?.url ?? "URL_NOT_FOUND"}>
                                        {link?.name ?? "LINK_NOT_FOUND"}
                                    </a>
                                </li>
                            )
                        }) : <>LINKS_NOT_FOUND</>
                    }

                </ul>
            </div>

        )
    }

    const Search = () => {
        return (
            <div className="relative hidden py-3 pl-4 pr-2 text-base font-medium text-gray-300 duration-500 ease-in-out bg-transparent rounded-full outline-none cursor-pointer hover:pr-5 group xl:block font-heading ring-1 hover:ring-2 ring-slate-200 ring-opacity-50 hover:ring-opacity-100 focus:ring-opacity-100">
                <SearchIcon />

                <input
                    className="w-2 text-lg font-medium text-white duration-500 ease-in-out bg-transparent rounded-full outline-none group-hover:pr-4 group-hover:w-full outline font-heading"
                />
            </div>
        )
    }

    const Favicon = () => {
        return (
            <a href="#">
                <img
                    className="h-16"
                    src="/assets/images/logo.png"
                    alt=""
                />
            </a>
        )
    }


    return (
        <Headroom>
            <section className="relative z-50 font-mono text-lg font-bold text-white duration-500 cursor-pointer backdrop-blur-md hover:backdrop-blur-none">
                <nav className="z-50 flex justify-between px-6 py-2 lg:px-10">
                    <div className="flex items-center justify-between w-full">
                        <Favicon />
                        <Links />
                        <Search />
                    </div>
                    <button onClick={() => toggleDrawer()} className="group self-center cursor-pointer navbar-burger xl:hidden focus:outline-none">
                        <div className="relative flex flex-col " >
                            <span className="w-px h-8 -mb-5 duration-500 rotate-90 bg-white" />
                            <span className="w-px h-8 -mb-5 duration-500 transform rotate-90 bg-white group-hover:rotate-45" />
                            <span className="w-px h-8 duration-500 rotate-90 bg-white" />
                        </div>
                    </button>
                </nav>
            </section>
        </Headroom>

    )
}

export default Header

