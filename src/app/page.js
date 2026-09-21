'use client';
import Image from "next/image";
import Time from "./time";
import Typewriter from "./typewriter";
import PgpBlock from "./pgpKey";

const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
xjMEaA6mABYJKwYBBAHaRw8BAQdAjx/LcrC7EL/tZyHH0pk7Bp0sW1BmWRsh
r4xanbIpCy/NJ3pndWVycmV0QHByb3Rvbi5tZSA8emd1ZXJyZXRAcHJvdG9u
Lm1lPsK/BBMWCABxBYJoDqYAAwsJBwmQUW34bLUF2xs1FAAAAAAAHAAQc2Fs
dEBub3RhdGlvbnMub3BlbnBncGpzLm9yZ7NnU3bU1nt55EArR92C7nICFQgD
FgACAhkBApsDAh4BFiEELQ8zT2GJ2BI2J0TWUW34bLUF2xsAAJ3cAP0ewLBg
gDEbashPH0NwpvOy+FM0gwIMSpcyo/ccmB8ydgD/eeS65QVQM7zyNlkdhRcM
qY28Cd/LAFJE4GfIajn2LwDOOARoDqYAEgorBgEEAZdVAQUBAQdA1U/Ib4Rx
O8rqZRjlUIrqRyoNOzBHUNqy8kHbBmKAU1QDAQoJwq4EGBYIAGAFgmgOpgAJ
kFFt+Gy1BdsbNRQAAAAAABwAEHNhbHRAbm90YXRpb25zLm9wZW5wZ3Bqcy5v
cmcFymgp3chpnagUQJUyo6JoApsMFiEELQ8zT2GJ2BI2J0TWUW34bLUF2xsA
ALfJAP9r4v0BML2jQifOmTwzRemoc7YBkawmy8H/x+AXhQUAoQEArtMYYuq9
Vj00tG6uCSSGrpsH17HU4H7RFvqOB+CMkQg=
=6Q5P
-----END PGP PUBLIC KEY BLOCK-----`;

const skills = [
  { name: "Java", icon: "/java.svg", alt: "Java logo" },
  { name: "Python", icon: "/python.svg", alt: "Python logo" },
  { name: "C++", icon: "/cpp.svg", alt: "C++ logo" },
  { name: "Docker", icon: "/docker.svg", alt: "Docker logo" },
  { name: "Linux", icon: "/tux.svg", alt: "Tux logo" },
];

const links = [
  { name: "Github", url: "https://github.com/Appolon24800", icon: "/github.svg" },
  { name: "Youtube", url: "https://www.youtube.com/@NotAppolonDotDev", icon: "/youtube.svg" },
  { name: "NameMC", url: "https://namemc.com/profile/Appolon_.1", icon: "/namemc.svg" },
  { name: "Discord", url: "https://discord.com/users/1167377747643990107", icon: "/discord.svg" },
  { name: "Homelab", url: "https://home.appolon.dev", icon: "/homer.png" },
];

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="bg snap-start grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-ibm-plex-sans)] relative z-10 overflow-hidden">
        <div className="w-[500%] h-[1250px] bg-linear-to-b from-[rgb(73,0,0)] to-[rgb(73,0,0,0)]"></div>
        <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-center text-center">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-image"
              src="/appolon_pfp.png"
              alt="Appolon's profile picture"
              width={220}
              height={220}
              priority
            />
            <h1 className="text-4xl font-[family-name:var(--font-ibm-plex-sans)] shadow mt-4">
              Appolon <span className="no-shadow wave">👋🏼</span>
            </h1>
            <h3 className="justify-center mt-8">
              <Typewriter />
            </h3>
            <Time />
          </div>
          <div className="flex flex-wrap gap-9 items-center justify-center w-full">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                <div className="h-16 flex items-end justify-center">
                  <Image src={skill.icon} alt={skill.alt} width={64} height={64} />
                </div>
                <span className="text-center w-full">{skill.name}</span>
              </div>
            ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          {links.map((link) => (
            <a
              key={link.name}
              className="flex items-center hover:underline hover:underline-offset-2"
              href={link.url}
            >
              <Image src={link.icon} alt={`${link.name} icon`} width={23} height={23} />
              <div className="ml-1">{link.name}</div>
            </a>
          ))}
        </footer>
      </div>

      <section className="bg snap-start min-h-screen relative flex items-center justify-center bg-black text-white px-6">
        <div className="lg:hidden absolute inset-0 red-wash pointer-events-none"></div>
        <div className="hidden lg:block w-1/4 text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-red-400">Who am I? 🇬🇧</h2>
            <p className="text-gray-300">
              I am Appolon, a backend software developer
            </p>
            <div className="text-sm text-gray-400">
              <p>• 4 years of experience in Java</p>
              <p>• 5 years of experience in Python with Django and FastAPI</p>
              <p>• I work with REST APIs, use Docker, and handle networking</p>
              <p>• System administrator and Linux user</p>
              <p>• I know software as well as hardware</p>
              <p>• Haven&apos;t released a chatgpt wrapper</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl text-center space-y-6 md:space-y-4 lg:max-w-lg lg:mx-20 relative">
          <div className="bg-gray-900 rounded-xl p-3 md:p-4 text-left shadow-md">
            <span className="text-lg md:text-xl font-semibold mb-2">Email</span>
            <Image src="/mail.png" alt="Email icon" width={16} height={16} className="inline-block ml-1 mb-1 invert" />
            <p className="font-mono text-xs md:text-sm text-red-200 break-all">
              <a href="mailto:contact@appolon.dev">contact@appolon.dev</a>
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-3 md:p-4 text-left shadow-md">
            <span className="text-lg md:text-xl font-semibold mb-2">Telegram</span>
            <Image src="/telegram.png" alt="Telegram icon" width={16} height={16} className="inline-block ml-1 mb-1" />
            <p className="font-mono text-xs md:text-sm text-red-200 break-all">
              <a href="https://t.me/appolonfr">@appolonfr</a>
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-3 md:p-4 text-left shadow-md relative">
            <span className="text-lg md:text-xl font-semibold mb-2">PGP</span>
            <Image src="/lock.png" alt="Lock icon" width={16} height={16} className="inline-block ml-1 mb-2 invert" />
            <PgpBlock pgpKey={pgpKey} />
          </div>
          <div className="bg-gray-900 rounded-xl p-3 md:p-4 text-left shadow-md space-y-3">
            <div>
              <span className="font-bold text-sm md:text-base">Bitcoin</span>
              <Image src="/btc.webp" alt="Bitcoin icon" width={16} height={16} className="inline-block ml-1 mb-1" />
              <p className="font-mono text-xs md:text-sm break-all text-red-200 mt-1">
                <a href="bitcoin:bc1qpppcw7zz2mthes454rgen8huq53hf83ls9k3u7">
                  bc1qpppcw7zz2mthes454rgen8huq53hf83ls9k3u7
                </a>
              </p>
            </div>
            <div>
              <span className="font-bold text-sm md:text-base">Litecoin</span>
              <Image src="/ltc.png" alt="Litecoin icon" width={16} height={16} className="inline-block ml-1 mb-1" />
              <p className="font-mono text-xs md:text-sm break-all text-red-200 mt-1">
                <a href="litecoin:LYXRNvyjzHPHEsFykEJG3gNLQ3g15MpE7f">
                  LYXRNvyjzHPHEsFykEJG3gNLQ3g15MpE7f
                </a>
              </p>
            </div>
            <div>
              <span className="font-bold text-sm md:text-base">ETH</span>
              <Image src="/eth.png" alt="Ethereum icon" width={11} height={11} className="inline-block ml-1 mb-1" />
              <p className="font-mono text-xs md:text-sm break-all text-red-200 mt-1">
                <a href="ethereum:0x06a2058D946053122242856e1b858f2652B57959">
                  0x06a2058D946053122242856e1b858f2652B57959
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-1/4 text-right">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-red-400">🇫🇷 Qui suis-je?</h2>
            <p className="text-gray-300">
              Je suis Appolon, un développeur backend
            </p>
            <div className="text-sm text-gray-400">
              <p>• 4 ans d&apos;expérience en Java</p>
              <p>• 5 ans d&apos;expérience en Python avec Django et FastAPI</p>
              <p>• Je travaille avec des API, utilise Docker et gère les réseaux</p>
              <p>• Utilise Linux et administrateur système</p>
              <p>• Je connais aussi bien le software que le hardware</p>
              <p>• N&apos;a pas sorti de wrapper pour ChatGPT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden snap-start min-h-screen relative flex items-center justify-center bg-black text-white px-6 py-12">
        <div className="absolute inset-0 bg-fade pointer-events-none"></div>
        <div className="max-w-2xl space-y-12 relative">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-400">Who am I? 🇬🇧</h2>
            <p className="text-gray-300 text-lg">
              I am Appolon, a backend software developer
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• 4 years of experience in Java</p>
              <p>• 5 years of experience in Python with Django and FastAPI</p>
              <p>• I work with REST APIs, use Docker, and handle networking</p>
              <p>• System administrator and Linux user</p>
              <p>• I know software as well as hardware</p>
              <p>• Haven&apos;t released a chatgpt wrapper</p>
            </div>
          </div>

          <div className="border-t border-gray-700"></div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-400">🇫🇷 Qui suis-je?</h2>
            <p className="text-gray-300 text-lg">
              Je suis Appolon, un développeur backend
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• 4 ans d&apos;expérience en Java</p>
              <p>• 5 ans d&apos;expérience en Python avec Django et FastAPI</p>
              <p>• Je travaille avec des API, utilise Docker et gère les réseaux</p>
              <p>• Utilise Linux et administrateur système</p>
              <p>• Je connais aussi bien le software que le hardware</p>
              <p>• N&apos;a pas sorti de wrapper pour ChatGPT</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
