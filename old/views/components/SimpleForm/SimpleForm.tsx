const SimpleForm = () => {

    return (
        <section className="bg-orange-200 py-26">
  <div className="container px-4 mx-auto">
    <div className="p-8 border-indigo-900 shadow md:p-16 border-3 rounded-2xl">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-lg font-extrabold text-orange-500">
          Newsletter
        </span>
        <h1 className="mt-3 mb-4 text-3xl font-extrabold md:text-4xl font-heading">
          Sign up for our newsletter
        </h1>
        <p className="mb-10 text-xl font-extrabold leading-8">
          Stay in the loop with everything you need to know.
        </p>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="flex flex-wrap justify-center -mx-2">
          <div className="flex-grow w-full px-2 mb-2 md:w-auto">
            <input
              className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 border-2 border-indigo-900 rounded shadow outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full px-2 mb-2 md:w-auto">
            <a
              className="inline-flex items-center justify-center w-full h-full px-5 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded md:w-auto hover:bg-indigo-900 border-3"
              href="#"
            >
              Subscribe
            </a>
          </div>
          <div className="w-full px-2">
            <p className="text-xs font-extrabold">
              We care about your data in our privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default SimpleForm