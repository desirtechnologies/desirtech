import type { ComponentType } from "@typings/Component";
import type { HeaderProps } from "@typings/Header";
import Headroom from "react-headroom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import useDrawer from "@hooks/useDrawer"

const Header: ComponentType<HeaderProps> = ({ favicon, links, sX }: HeaderProps) => {

    const { toggleDrawer } = useDrawer()

    const Links = () => {
        return (
            <div className="flex items-center">
                <button className="hidden px-4 mx-auto mr-20 navbar-burger xl:block focus:outline-none">
                    <MenuIcon fontSize={"large"} />
                </button>
                <ul className="hidden px-4 mx-auto tracking-tight xl:flex">
                    {
                        links ? links.map((link, index) => {
                            return (
                                <li key={index} className="pb-px ease-in-out duration-250 hover:border-y hover:border-green-500 mr-11 border-opacity-40 group">
                                    <a className="text-xl group-hover:opacity-80" href={link?.url ?? "URL_NOT_FOUND"}>
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
            <div className="relative hidden py-3 pl-4 pr-5 text-base font-medium text-gray-300 duration-500 ease-in-out bg-transparent rounded-full outline-none cursor-pointer group xl:block font-heading ring-2 ring-green-500 ring-opacity-50 hover:ring-opacity-100 focus:ring-opacity-100">
                <SearchIcon />

                <input
                    className="pr-5 text-lg font-medium text-white bg-transparent rounded-full outline-none outline font-heading"
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
            <section className="relative z-50 font-mono text-lg font-bold text-white backdrop-blur-md">
                <nav className="z-50 flex justify-between px-6 py-8 lg:px-12">
                    <div className="flex items-center justify-between w-full">
                        <Favicon />
                        <Links />
                        <Search />
                    </div>
                    <button onClick={() => toggleDrawer()} className="self-center cursor-pointer navbar-burger xl:hidden focus:outline-none">
                        <MenuIcon sx={{ height: 128 }} />
                    </button>
                </nav>
            </section>
        </Headroom>

    )
}

export default Header