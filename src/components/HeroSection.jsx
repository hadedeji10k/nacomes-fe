import imag2 from "../assets/hacker.png";
import heroimage from "../assets/heroimage.png";

function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background gradient - RGB blending */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,#0077b6,#003566)]" />

        {/* Decorative blurred shapes */}
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-24 bottom-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex">
          {/* Top navigation bar */}
          <nav className="flex items-center justify-between p-6 md:px-12 gap-3 w-full">
            <div className="flex items-center gap-2">
              <img src={imag2} alt="hacker" className="w-20" />
              <div className="text-white font-bold text-xl">NACOMES</div>
            </div>
            <div className="space-x-4">
              <a href="#features" className="text-white hover:underline">
                Features
              </a>
              <a href="#courses" className="text-white hover:underline">
                Courses
              </a>
              <a href="#about" className="text-white hover:underline">
                About
              </a>
              <a
                href="#login"
                className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg 
                    hover:scale-105 transform transition
                    shadow-[-2px_2px_8px_black]"
              >
                Login
              </a>
            </div>
          </nav>
        </div>

        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
            {/* Left column: text */}
            <div className="w-full md:w-1/2 pr-16 pb-16 pl-24 mx-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Welcome to the{" "}
                <span
                  className="inline-block my-4 mx-[-8] -ml-[70px] text-8xl bg-orange-500 py-2.5 px-5
                shadow-[-3px_3px_8px_-1px_black] 
                rounded-[16px] 
                [text-shadow:-3px_1px_6px_black] 
                bg-[linear-gradient(38deg,#be4d07,#f88914)]
                "
                >
                  NACOMES
                </span>
                official website
                <span className="text-blue-300">.</span>
              </h1>

              <p className="mt-3 text-white/90 text-base sm:text-lg max-w-xl">
                A platform that provides Computer Engineering students to
                explore various courses, enhancing their learning experience
                with a user-friendly interface.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 
                  font-semibold hover:scale-105 transform transition
                  shadow-[-2px_2px_8px_black]"
                >
                  Register
                </a>

                <a
                  href="#courses"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 hover:[text-shadow:#fffae8_1px_0_10px] transition"
                >
                  Browse courses
                </a>
              </div>

              {/* Small stats row */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L20 7v7c0 5-4 9-8 9s-8-4-8-9V7l8-5z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <div className="font-bold text-white">200+</div>
                    <div className="text-white/80">Students</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-yellow-300"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 17.3L6.2 20l1.1-6.4L2 9.2l6.5-.9L12 2l3.5 6.3 6.5.9-5.3 4.5L17.8 20 12 17.3z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <div className="font-bold text-white">4.7</div>
                    <div className="text-white/80">Avg rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: illustration */}
            <div className="w-full md:w-1/2 md:justify-end">
              <div className="relative">
                <img
                  src={heroimage}
                  alt="Students learning illustration"
                  className="max-w-lg md:max-w-xl rounded-xl drop-shadow-2xl transform transition hover:scale-[1.5]
                  w-[49rem] m-[-79px_81px] scale-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
