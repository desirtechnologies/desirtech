const Carousel = () => {

  return (
    <section
      className="py-24 overflow-hidden font-mono 2xl:py-44"
      style={{ borderTopLeftRadius: 80, borderTopRightRadius: 80 }}
    >
      <div className="container px-4 mx-auto">
        <div className="mb-24 text-center">
          <span className="text-sm text-gray-300 uppercase">What people say</span>
          <h2 className="mt-8 font-medium text-9xl md:text-10xl xl:text-11xl font-heading">
            Testimonials
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-16 md:mb-28">
          <div className="order-last w-auto px-4 mb-4 text-center xl:mb-0 sm:order-first">
            <a className="inline-block" href="#">
              <svg
                width={8}
                height={12}
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.21015 10.4594C7.59662 10.8128 7.59662 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.096617 6.28579 -0.096617 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880363 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div className="w-full mx-auto mb-16 sm:w-4/5 sm:mb-0">
            <div className="shadow-lg bg-gray-50 rounded-7xl">
              <div className="flex flex-wrap pb-8 lg:items-end">
                <div className="self-stretch w-full overflow-hidden lg:w-1/2 rounded-tr-3xl lg:rounded-tr-none rounded-tl-3xl">
                  <img
                    className="object-cover w-full h-full"
                    src="uinel-assets/images/team/photo-big.png"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center py-5 pl-8 pr-8 md:pl-20">
                    <span className="text-xl font-medium">4.2</span>
                    <a className="inline-block ml-3 mr-1" href="#">
                      <img src="uinel-assets/images/team/star-gold.svg" alt="" />
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <img src="uinel-assets/images/team/star-gold.svg" alt="" />
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <img src="uinel-assets/images/team/star-gold.svg" alt="" />
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <img src="uinel-assets/images/team/star-gold.svg" alt="" />
                    </a>
                    <a className="inline-block" href="#">
                      <img src="uinel-assets/images/team/star.svg" alt="" />
                    </a>
                  </div>
                  <div className="relative px-8 pt-16 pb-20 bg-white md:pl-20">
                    <img
                      className="absolute top-0 right-0 w-10 mt-10 mr-6 transform md:mr-0 md:translate-x-1/2"
                      src="uinel-assets/images/team/quote-2.svg"
                      alt=""
                    />
                    <h3 className="mb-5 text-3xl font-medium font-heading">
                      Thx for amazing tools, Uinel’s family!
                    </h3>
                    <p className="text-base text-gray-300 mb-14">
                      I haretra neque non mi aliquam, finibus hart bibendum
                      molestie. Vestibulum suscipit sagittis lorem sad dignissim
                      mauris neno haretra sagittis.
                    </p>
                    <h4 className="text-xl font-medium font-heading">
                      Jasmine Joy
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-last w-auto px-4 mb-4 text-center xl:mb-0">
            <a className="inline-block" href="#">
              <svg
                width={8}
                height={12}
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.289848 1.54064C-0.0966159 1.18719 -0.0966159 0.615929 0.289848 0.265087C0.676312 -0.0870581 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.096616 11.3824 -0.096616 10.8112 0.289848 10.4603L4.81927 5.99853L0.289848 1.54064Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="h-1 mx-auto">
          <div className="w-64 mx-auto bg-gray-100 rounded-full h-1/2">
            <div className="w-1/3 h-full bg-purple-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Carousel