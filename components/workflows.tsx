import Image from 'next/image';
import WorflowImg01 from '@/public/images/test1.jpg';
import WorflowImg02 from '@/public/images/test 2.jpg';
import WorflowImg03 from '@/public/images/test 3.jpg';
import Spotlight from '@/components/spotlight';

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">Seroo</span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Cabang Seroo
            </h2>
            <p className="text-lg text-indigo-200/65">Seroo berkembang pesat dengan 3 cabang di lokasi yang beragam untuk memberikan minuman terbaik untuk pelanggan.</p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://www.google.com/maps?q=0.4656552,101.4039658&entry=gps&lucs=,94246480,94242565,94224825,94227247,94227248,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447&g_ep=CAISEjI0LjUwLjAuNzA0NDI3ODkxMBgAIJ6dCip-LDk0MjQ2NDgwLDk0MjQyNTY1LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjI4MzU0LDk0MjMzMDc5LDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJRA%3D%3D&g_st=com.google.maps.preview.copy"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                {/* Image */}
                <Image className="inline-flex" src={WorflowImg01} width={350} height={288} alt="Workflow 01" />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">Seroo Delima</span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">Manjakan lidahmu dengan minuman berkualitas dan jadilah bagian dari bisnis yang berkembang bersama Seroo.</p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://www.google.com/maps?q=0.4528011,101.3860943&entry=gps&lucs=,94246480,94242565,94224825,94227247,94227248,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447&g_ep=CAISEjI0LjUwLjAuNzA0NDI3ODkxMBgAIJ6dCip-LDk0MjQ2NDgwLDk0MjQyNTY1LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjI4MzU0LDk0MjMzMDc5LDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJRA%3D%3D&g_st=com.google.maps.preview.copy"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                {/* Image */}
                <Image className="inline-flex" src={WorflowImg02} width={350} height={288} alt="Workflow 02" />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">Seroo Kualu</span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">Tingkatkan pengalaman pelanggan dengan minuman berkualitas. Mari berkolaborasi dan tumbuh bersama kami.</p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://www.google.com/maps/place/0%C2%B031'21.7%22N+101%C2%B027'01.4%22E/@0.5226842,101.4478092,17z/data=!3m1!4b1!4m4!3m3!8m2!3d0.5226842!4d101.4503841?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                {/* Image */}
                <Image className="inline-flex" src={WorflowImg03} width={350} height={288} alt="Workflow 03" />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">Seroo Mustika</span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">Yuk, jadi bagian dari tren! Minuman enak, promosi asik, peluang bisnis menarik.</p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
