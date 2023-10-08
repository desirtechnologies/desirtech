export const defaultProps = {
  favicon: {
    url: "",
    image: {
      src: "",
    },
  },

  links: [
    {
        name: ""
    }
  ],
  cta: {
    url: "",
  },
};
export default function Header(props: any): any {
  let { favicon, links, cta } = props;
  const Favicon = () => {
    return (
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto">
            <a href={favicon?.url ?? defaultProps.favicon.url}>
              <img src={favicon?.image?.src} alt={favicon?.image?.alt} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const Links = () => {
    return (
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-auto lg:block">
            <ul className="flex items-center justify-center">
              {links?.map((link, index) => (
                <li key={index} className="mr-9">
                  <a
                    className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                    href="#"
                  >
                    {link?.name ?? null}
                  </a>
                </li>
              )) ??
                defaultProps.links.map((link, index) => (
                  <li key={index} className="mr-9">
                    <a
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      href="#"
                    >
                     
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const CallToAction = () => {
    const MobileMenuBurger = () => (
      <div className="w-auto lg:hidden">
        <a className="inline-block" href="#">
          <svg
            className="text-green-700 opacity-80 focus:shadow-2xl"
            width={45}
            height={45}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={56} height={56} rx={28} fill="currentColor" />
            <path
              d="M37 32H19M37 24H19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    );
    return (
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          {cta ? (
            <div className="hidden w-auto lg:block">
              <div className="flex flex-wrap -m-2">
                <div className="w-full p-2 md:w-auto">
                  <a
                    className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 border border-gray-800 rounded-full"
                    href={cta?.primary?.url}
                  >
                    {cta?.primary?.name}
                  </a>
                </div>
                <div className="w-full p-2 md:w-auto">
                  <a
                    className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-green-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                    href={cta?.secondary?.url}
                  >
                    {cta?.secondary?.name}
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          <MobileMenuBurger />
        </div>
      </div>
    );
  };

  return (
    <section className="fixed top-0 z-50 w-full py-6 font-mono">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between px-6 py-3.5 backdrop-blur-lg border-2 border-opacity-25 hover:border-opacity-50 cursor-pointer hover:shadow-xl shadow-white duration-500 will-change-scroll ease-in-out border-white rounded-full">
          <Favicon />
          <Links />
          <CallToAction />
        </div>
      </div>
    </section>
  );
}
