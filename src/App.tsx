import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// ===== 自定义配置（按需修改）=====
const EMAIL = "w010419sy@ruc.edu.cn";
// 如果你的仓库名不是 personal-website，请把下面路径换成你的实际仓库名
const THANKS_URL = "/personal-website/thanks.html";
// =================================

type Lang = "en" | "zh";

const copy = {
  en: {
    nav: { about: "About", contact: "Contact", lang: "中 / EN" },
    hero: {
      title: "Sylvia Wang",
      subtitle: "Economics & Strategy Research",
      summary:
        "M.Sc. in Economics. Focus on digital economy & low-carbon. Experience in research, market analysis, and cross-functional collaboration.",
      btnCv: "Download CV",
      btnEmail: "Email Me",
    },
    about: {
      title: "About",
      paragraph:
        "Graduate in Economics with research experience in digital economy and low-carbon agriculture. Hands-on with fixed effects panel models, market analysis, and cross-functional collaboration.",
    },
    contact: {
      title: "Quick Contact",
      name: "Your name",
      email: "Your email",
      msg: "Your message (e.g., Strategy Research role)",
      send: "Send",
      note:
        'This form is live. Messages will be delivered to my mailbox via FormSubmit.',
    },
  },
  zh: {
    nav: { about: "关于我", contact: "联系我", lang: "EN / 中" },
    hero: {
      title: "Sylvia Wang / 王思宇",
      subtitle: "经济学与战略研究",
      summary:
        "经济学硕士，关注数字经济与低碳方向，具备研究、市场分析与跨部门协作经验。",
      btnCv: "下载简历",
      btnEmail: "发邮件",
    },
    about: {
      title: "关于我",
      paragraph:
        "经济学研究生，方向为数字经济与农业低碳。熟悉固定效应面板模型、市场分析与跨部门协作，曾参与社会科学与运营相关项目。",
    },
    contact: {
      title: "快速联系",
      name: "你的名字",
      email: "你的邮箱",
      msg: "你的需求（如：战略研究岗位）",
      send: "发送",
      note: "此表单为真实表单，提交后会通过 FormSubmit 转发到我的邮箱。",
    },
  },
};

function Navbar({
  lang,
  toggle,
}: {
  lang: Lang;
  toggle: () => void;
}) {
  const t = copy[lang].nav;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold">
          {lang === "en" ? "Personal Website" : "个人网站"}
        </a>
        <div className="flex items-center gap-5 text-sm">
          <a href="#about" className="hover:underline">
            {t.about}
          </a>
          <a href="#contact" className="hover:underline">
            {t.contact}
          </a>
          <Button variant="outline" className="h-8 px-3" onClick={toggle}>
            {t.lang}
          </Button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang].hero;

  return (
    <section
      id="top"
      className="min-h-[72vh] flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl sm:text-5xl font-bold">{t.title}</h1>
      <p className="mt-3 text-lg text-gray-700">{t.subtitle}</p>
      <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">{t.summary}</p>

      <div className="mt-8 flex gap-4">
        <a
          href="/personal-website/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-6 py-3 text-base">{t.btnCv}</Button>
        </a>
        <a href={`mailto:${EMAIL}`}>
          <Button variant="outline" className="px-6 py-3 text-base border-gray-300">
            {t.btnEmail}
          </Button>
        </a>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = copy[lang].about;

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-xl font-semibold mb-4">{t.title}</h2>
      <Card>
        <CardContent className="pt-6 text-gray-700 leading-relaxed">
          {t.paragraph}
        </CardContent>
      </Card>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang].contact;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={`https://formsubmit.co/${EMAIL}`}
            method="POST"
            className="space-y-3"
          >
            {/* 成功后跳转到感谢页；如果你的仓库名不同请改成你的路径 */}
            <input type="hidden" name="_next" value={THANKS_URL} />
            {/* 关闭验证码（你也可以删掉这行来启用验证码） */}
            <input type="hidden" name="_captcha" value="false" />

            <Input name="name" placeholder={t.name} required />
            <Input type="email" name="email" placeholder={t.email} required />
            <Input name="message" placeholder={t.msg} required />

            <Button type="submit" className="w-full rounded-2xl">
              {t.send}
            </Button>

            <p className="text-xs text-gray-500">{t.note}</p>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((p) => (p === "en" ? "zh" : "en"));

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} toggle={toggleLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sylvia Wang
      </footer>
    </div>
  );
}
