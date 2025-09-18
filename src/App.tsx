import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Download, Mail, Linkedin, Globe, MapPin, ExternalLink, BookOpen, Briefcase, Rocket, Languages, Github } from "lucide-react";

// ======= DATA (edit here) =======
const profile = {
  name: "王思宇 / Sylvia",
  title_zh: "战略研究 / 行业分析 / 数据分析",
  title_en: "Strategy & Industry Research · Data Analytics",
  location: "Beijing / Shanghai / Hongkong",
  email: "w010419sy@ruc.edu.cn",
  github: "https://github.com/WsY-Younger",
  summary_zh:
    "环境经济学背景，擅长行业趋势研判、政策分析与数据建模。具备跨部门协作与研究报告输出能力，关注数字经济与可持续发展。",
  summary_en:
    "Economics background with strengths in industry trend analysis, policy research, and data modeling. Experienced in cross-functional collaboration and research report writing; interested in the digital economy & sustainability.",
  skills: [
    "Stata",
    "Python (pandas, scikit-learn)",
    "MySQL",
    "Excel (advanced)",
    "Market/Policy Research",
    "Fixed-effects Regression",
    "Report Writing"
  ],
};

const education = [
  {
    zh: {
      school: "中国人民大学",
      degree: "硕士 · 人口、资源与环境经济学",
      period: "2025.09–2027.06",
      profession: "人口、资源与环境经济学",
      details:
        "研究方向：农业低碳、数字经济、可持续发展、战略与政策分析",
    },
    en: {
      school: "Renmin University of China",
      degree: "Master · Population, Resources & Environmental Economics",
      period: "Sep 2025 – Jun 2027",
      profession: "Population、resources and environment",
      details: "Focus: Digital economy, sustainability, strategic & policy analysis",
    },
  },
  {
    zh: {
      school: "上海对外经贸大学",
      degree: "学士 · 经济学 (GPA 3.40/4.0)",
      period: "2019.09–2023.06",
      details: "核心课程：宏/微观经济学、财务管理、货币金融学",
    },
    en: {
      school: "Shanghai University of International Business and Economics",
      degree: "B.A. in Economics (GPA 3.40/4.0)",
      period: "Sep 2019 – Jun 2023",
      details: "Core: Micro/Macroeconomics, Financial Management, Monetary Finance",
    },
  },
];

const experience = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    zh: {
      company: "好特卖",
      role: "财务实习生",
      period: "2023.03–2023.10",
      bullets: [
        "核对与追踪每日 300+ 条订单数据，保障准确与时效",
        "推进自动化对账方案，调研 ERP 并落地低代码工具",
        "撰写活动复盘表，分析 GMV/拉新率/ROI，识别机会点",
      ],
    },
    en: {
      company: "HotSale",
      role: "Finance Intern",
      period: "Mar 2023 – Oct 2023",
      bullets: [
        "Verified & tracked 300+ daily orders for accuracy & timeliness",
        "Advanced reconciliation automation; researched ERP & low-code tooling",
        "Produced post-event analyses (GMV / ROI / new user rate) to identify opportunities",
      ],
    },
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    zh: {
      company: "中原农业保险",
      role: "档案管理实习生",
      period: "2023.01–2023.02",
      bullets: [
        "数字化整理千户保险档案，确保合规与可检索性",
        "协同政府部门完成合规审核，支持新一季投保",
        "参与风险核查，现场核验 8000 头牛，掌握产业链调研流程",
      ],
    },
    en: {
      company: "Zhongyuan Agricultural Insurance",
      role: "Archive Management Intern",
      period: "Jan 2023 – Feb 2023",
      bullets: [
        "Digitized 1,000+ insurance files ensuring compliance & accessibility",
        "Supported audits with agencies; enabled smooth policy renewals",
        "On-site risk checks (8,000 cattle); strengthened supply-chain insight",
      ],
    },
  },
];

const projects = [
  {
    icon: <Rocket className="w-5 h-5" />,
    zh: {
      name: "国际贸易创业项目",
      role: "联合发起人/商务拓展",
      period: "2023.03–2023.09",
      bullets: [
        "对接 3 家海外企业，推进合作谈判与分销模式验证",
        "撰写市场分析报告：规模/政策/竞争格局/定价与进入策略",
      ],
    },
    en: {
      name: "International Trade Startup Project",
      role: "Co‑founder / BizDev Lead",
      period: "Mar 2023 – Sep 2023",
      bullets: [
        "Engaged 3 overseas companies; advanced negotiations & distribution model",
        "Delivered market research (size/policy/competition) with pricing & entry plan",
      ],
    },
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    zh: {
      name: "本科毕业论文",
      role: "独立研究者",
      period: "2023.03–2023.06",
      bullets: [
        "主题：数字经济对中原地区农业碳排放影响的实证研究",
        "方法：地级市面板数据 + 固定效应回归（Stata）",
        "创新：引入数字金融普惠指数，提出政策建议",
      ],
    },
    en: {
      name: "Undergraduate Thesis",
      role: "Independent Researcher",
      period: "Mar 2023 – Jun 2023",
      bullets: [
        "Topic: Digital economy’s impact on agricultural carbon emissions (Central China)",
        "Method: Panel data + fixed‑effects regression (Stata)",
        "Novelty: Digital Financial Inclusion Index; policy implications",
      ],
    },
  },
];

// ======= UI =======
export default function App() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const t = useMemo(() => (key: string, zh: string, en: string) => (lang === "zh" ? zh : en), [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-semibold">{profile.name.substring(0,1)}</div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">{profile.name}</h1>
              <p className="text-xs text-slate-600">{lang === "zh" ? profile.title_zh : profile.title_en}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-2xl" onClick={() => setLang(lang === "zh" ? "en" : "zh")}> 
              <Languages className="w-4 h-4 mr-1" /> {lang === "zh" ? "EN" : "中文"}
            </Button>
            <Button variant="default" className="rounded-2xl">
              <Download className="w-4 h-4 mr-1" /> {t("download","下载简历","Download CV")}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              {lang === "zh" ? "你好，我是" : "Hi, I’m"} {profile.name}
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {lang === "zh" ? profile.summary_zh : profile.summary_en}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <Badge key={s} className="rounded-2xl px-3 py-1 text-[11px]">{s}</Badge>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="inline-flex items-center text-sm hover:underline" href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4 mr-1" /> {profile.email}
              </a>
              <a className="inline-flex items-center text-sm hover:underline" href={profile.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4 mr-1" /> GitHub
              </a>
              <span className="inline-flex items-center text-sm text-slate-600">
                <MapPin className="w-4 h-4 mr-1" /> {profile.location}
              </span>
            </div>
          </div>
          <Card className="shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">
                {t("contact","快速联系","Quick Contact")}
              </CardTitle>
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

                <Button type="submit" className="w-full rounded-2xl">
                  {t("send", "发送", "Send")}
                </Button>
              </form>
              <p className="text-xs text-slate-500">
                {t("note","提交后会直接发到邮箱，无需后台。","This form sends directly to your email.")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sections */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="rounded-2xl">
            <TabsTrigger value="experience">{t("exp","经历","Experience")}</TabsTrigger>
            <TabsTrigger value="projects">{t("proj","项目&科研","Projects & Research")}</TabsTrigger>
            <TabsTrigger value="education">{t("edu","教育","Education")}</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-6 space-y-4">
            {experience.map((item, idx) => {
              const d = lang === "zh" ? item.zh : item.en;
              return (
                <Card key={idx} className="rounded-2xl shadow-sm">
                  <CardHeader className="pb-2 flex flex-row items-center gap-3">
                    {item.icon}
                    <div>
                      <CardTitle className="text-lg">{d.company} · {d.role}</CardTitle>
                      <p className="text-sm text-slate-500">{d.period}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-sm leading-7">
                      {d.bullets.map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="projects" className="mt-6 space-y-4">
            {projects.map((p, idx) => {
              const d = lang === "zh" ? p.zh : p.en;
              return (
                <Card key={idx} className="rounded-2xl shadow-sm">
                  <CardHeader className="pb-2 flex flex-row items-center gap-3">
                    {p.icon}
                    <div>
                      <CardTitle className="text-lg">{d.name} · {d.role}</CardTitle>
                      <p className="text-sm text-slate-500">{d.period}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-sm leading-7">
                      {d.bullets.map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="education" className="mt-6 grid md:grid-cols-2 gap-4">
            {education.map((e, idx) => {
              const d = lang === "zh" ? e.zh : e.en;
              return (
                <Card key={idx} className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{d.school}</CardTitle>
                    <p className="text-sm text-slate-500">{d.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium">{d.degree}</p>
                    <p className="text-sm text-slate-600 mt-1">{d.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-sm text-slate-600 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <a className="inline-flex items-center hover:underline" href={`mailto:${profile.email}`}><Mail className="w-4 h-4 mr-1"/>Email</a>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} {profile.name}. {lang === "zh" ? "保留所有权利。" : "All rights reserved."}</div>
        </div>
      </main>
    </div>
  );
}
