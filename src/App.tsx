import { PROFILE } from "./constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        {/* 左边：名字 Logo */}
        <a href="#top" className="font-semibold text-lg">{PROFILE.nameEn}</a>

        {/* 右边：导航菜单 */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <div className="grid md:grid-cols-[120px,1fr] items-center gap-6">
        <img
          src={PROFILE.avatar}
          alt={PROFILE.nameEn}
          className="w-24 h-24 rounded-full object-cover ring-2 ring-gray-200"
          onError={(e:any)=>{e.currentTarget.style.display='none'}}
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {PROFILE.nameEn} <span className="text-gray-400">/ {PROFILE.nameZh}</span>
          </h1>
          <p className="mt-2 text-gray-700">{PROFILE.title}</p>
          <p className="mt-3 text-gray-600">{PROFILE.blurb}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="rounded-lg bg-gray-900 text-white px-4 py-2"
               href={PROFILE.cvPath} download>
              Download CV
            </a>
            <a className="rounded-lg border px-4 py-2"
               href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Inquiry from Personal Website")}`}>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">About</h2>
      <Card>
        <CardContent className="pt-6 text-gray-700 leading-relaxed">
          <p>
            Graduate in Economics with research experience in digital economy and
            low-carbon agriculture. Hands-on with fixed effects panel models, market
            analysis, and cross-functional collaboration. Previously co-founded a
            small international trade initiative to explore China market entry for
            overseas SMEs.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

function Projects() {
  const items = [
    {
      title: "International Trade Startup",
      period: "Mar–Sep 2023",
      bullets: [
        "Outreach to 3 overseas firms (incl. coconut wine brand) via online expos.",
        "Drafted market entry outline; compiled competitor & pricing briefs.",
      ],
    },
    {
      title: "Thesis — Digital Economy & Agri Emissions",
      period: "Mar–Jun 2023",
      bullets: [
        "FE panel model across cities; finding: digital economy reduces agri CO₂.",
        "Discussed measurement limits & channels; reproducible notes available.",
      ],
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">Projects & Research</h2>
      <div className="grid gap-4">
        {items.map((it) => (
          <Card key={it.title}>
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                <span>{it.title}</span>
                <span className="text-sm text-gray-500">{it.period}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">Quick Contact</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Send me a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action="https://formsubmit.co/w010419sy@ruc.edu.cn"
            method="POST"
            className="space-y-2"
          >
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <Input
              type="text"
              name="message"
              placeholder="Your message (e.g., Strategy Research role)"
              required
            />

            {/* 关键：提交后跳转到 thanks.html */}
            <input
              type="hidden"
              name="_next"
              value="https://wsy-younger.github.io/personal-website/thanks.html"
            />

            {/* 可选：关闭验证码 */}
            <input type="hidden" name="_captcha" value="false" />

            <Button type="submit" className="w-full rounded-2xl">Send</Button>
          </form>

        </CardContent>
      </Card>
    </section>
  );
}

export default function App() {
  return (
    <div className="text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="mx-auto max-w-5xl px-4 py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} {PROFILE.nameEn}. {PROFILE.location}
      </footer>
    </div>
  );
}
