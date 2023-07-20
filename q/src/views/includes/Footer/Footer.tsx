export default function Footer() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -m-8 mb-8">
              <div className="w-full md:w-1/3 p-8">
                <img
                  className="mb-6"
                  src="zanrly-assets/logos/zanrly-logo-small.svg"
                  alt=""
                />
                <p className="text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  venenatis volutpat velit, quis iaculis velit bibendum.
                </p>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <ul className="md:max-w-max ml-auto">
                  <li className="mb-6">
                    <a
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      href="#"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      href="#"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <ul className="md:max-w-max ml-auto">
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Knowledge Base
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      System Status
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between -m-4">
              <div className="w-auto p-4">
                <p className="font-bold">
                  <span>Ⓒ Copyright. All rights reserved by </span>
                  <a className="text-blue-500 hover:text-blue-600" href="#">
                    Zanrly
                  </a>
                </p>
              </div>
              <div className="w-auto p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src="zanrly-assets/images/insta.svg" alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src="zanrly-assets/images/twitter.svg" alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src="zanrly-assets/images/footers/fb.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
