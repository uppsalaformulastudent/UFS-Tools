import Image from "next/image";

export default function Template() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-8">
      <div className="flex items-center gap-8 bg-white px-8 py-6 rounded-xl shadow-sm">
        {/* Left side */}
        <div className="flex flex-col items-center gap-4 w-52">
          <Image
            src="/UppsalaFS-logo.svg"
            alt="Uppsala Formula Student"
            width={210}
            height={70}
            priority
            className="w-full h-auto object-contain"
          />

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/uppsala-formula-student/home/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 transition-transform hover:scale-110"
            >
              <svg
                viewBox="0 0 291.319 291.319"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
              >
                <path
                  fill="#b22538"
                  d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66 S65.21,0,145.659,0z"
                />

                <path
                  fill="#FFFFFF"
                  d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
                  c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324
                  c0-10.424,9.55-20.593,21.512-20.593
                  s14.912,10.169,14.912,20.338v49.57h27.275v-51.6
                  C218.553,112.686,201.584,106.077,188.338,106.077z
                  M95.589,100.141
                  c7.538,0,13.656-6.118,13.656-13.656
                  S103.127,72.83,95.589,72.83
                  s-13.656,6.118-13.656,13.656
                  S88.051,100.141,95.589,100.141z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/uppsalafs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 transition-transform hover:scale-110"
            >
              <svg
                viewBox="0 0 19.2 19.2"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
              >
                <path
                  fill="#b22538"
                  d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="w-[3px] self-stretch bg-[#b22538] rounded-full" />

        {/* Right side */}
        <div className="flex flex-col justify-center min-w-72">
          <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
            Name 
          </h1>

          <p className="text-[#b22538] font-semibold text-lg mt-1">
            Title
          </p>

          <div className="mt-4 space-y-1 text-sm text-neutral-600">
            <a
              href="mailto:mail@example.com"
              className="block hover:text-[#b22538] transition-colors"
            >
              mail@example.com
            </a>

            <a
              href="tel:+46701234567"
              className="block hover:text-[#b22538] transition-colors"
            >
              +46 70 123 45 67
            </a>

            <a
              href="https://uppsalaformulastudent.se"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#b22538] transition-colors"
            >
              uppsalaformulastudent.se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
