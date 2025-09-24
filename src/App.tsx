import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Download, Mail, Globe, MapPin, ExternalLink, BookOpen, Briefcase, Rocket, Languages, Github } from "lucide-react";

// ======= DATA (edit here) =======
const profile = {
  name: "王思宇 /  Sylvia Wang",
  title_zh: "战略研究 / 行业分析 / 数据分析",
  title_en: "Strategy / Industry Research / Data Analytics",
  location: "Beijing / Shanghai",
  email: "w010419sy@ruc.edu.cn",
  github: "https://github.com/WsY-Younger",
  summary_zh:
    "环境经济学背景，擅长行业趋势研判、政策分析与数据建模。具备跨部门协作与研究报告输出能力，关注数字经济与可持续发展。",
  summary_en:
    "ecological-Economics background with strengths in industry trend analysis, policy research, and data modeling. Experienced in cross-functional collaboration and research report writing; interested in the digital economy & sustainability.",
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
      period: "2025.09-2027.06",
      details:
        "研究方向：碳排放、数字经济、可持续发展、战略与政策分析",
    },
    en: {
      school: "Renmin University of China",
      degree: "Master · Population, Resources & Environmental Economics",
      period: "Sept 2025 - Present",
      details: "Focus: Carbon emissions,Digital economy, sustainability, strategic & policy analysis",
    },
  },
    { 
      zh: {
      school: "上海对外经贸大学",
      degree: "学士 · 经济学 (GPA 3.40/4.0)",
      period: "2019.09-2023.06",
      details: "核心课程：宏/微观经济学、财务管理、货币金融学",
    },
    en: {
      school: "Shanghai University of International Business and Economics",
      degree: "B.A. in Economics (GPA 3.40/4.0)",
      period: "Sept 2019 - Jun 2023",
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
      period: "2023.03 - 2023.10",
      bullets: [
        "独立负责每日约300条订单数据的核对与流水追踪, 保障了财务数据的准确与及时.",
        "为提升效率,主导推进对账自动化方案研究,深入应用Excel高级功能进行数据校验,并调研多家外部ERP系统服务商为团队决策提供输入.",
        "后期参与基于明道云的低代码系统开发实践, 独立完成部分表单设计与测试, 积累了宝贵的业务-技术转化经验.",
        "推主动承担兼职团队的全面管理工作, 包括独立对接中介、人员招募、工作量与绩效工资核算(试用多种激励模式).",
        "并处理现场突发状况,保障了活动人力支撑与稳定执行.",
        "同时统筹活动物料的分发与物流，确保各区域物资准时到位, 并亲身参与一线推广以深入理解运营流程.",
        "在推广活动结束后, 独立完成数据回收与深度分析, 通过溯源用户路径精准计算GMV、拉新率及ROI等核心指标.",
        "所撰写的分析报告有效评估了活动效果, 为后续策略优化提供了直接的数据依据.",
      ],
    },
    en: {
      company: "HotMaxx",
      role: "Finance Intern",
      period: "Mar 2023 - Oct 2023",
      bullets: [ 
        "Explored financial process optimization and automation: independently handled reconciliation and transaction tracking for ~300 daily orders, ensuring the accuracy and timeliness of financial data.",
        "Led research on automated reconciliation solutions to enhance efficiency, leveraging advanced Excel functions for data validation and evaluating multiple external ERP providers to support team decision-making.",
        "Contributed to low-code system development on Mingdao Cloud, independently designing and testing forms, and gaining valuable experience in translating business needs into technical solutions.",
        "Took full responsibility for managing a part-time team, including liaising with agencies, recruiting staff, and overseeing workload and performance-based payroll calculations (experimenting with various incentive models).",
        "Handled on-site contingencies to ensure adequate manpower support and smooth execution of events.",
        "Coordinated distribution and logistics of event materials, ensuring timely delivery across regions, while actively engaging in frontline promotion to gain first-hand insights into operational processes.",
        "Conducted post-campaign data collection and in-depth analysis, tracing user journeys to accurately calculate key metrics such as GMV, new customer acquisition rate, and ROI.",
        "Authored analytical reports that effectively evaluated campaign outcomes and provided direct data-driven insights for subsequent strategy optimization.",
      ],
    },
  },
  {
   icon: <Briefcase className="w-5 h-5" />,
    zh: {
      company: "中原农业保险",
      role: "档案管理实习生",
      period: "2023.01 - 2023.02",
      bullets: [
        "负责执行六个乡镇超千户投保农户的纸质档案规范化整理与数字化录入工作，涵盖养殖险、蔬菜制种等多项险种。通过系统性的归档与扫描，确保了电子与纸质档案的百分百对应与可检索性，为后续理赔审核提供了可靠的数据基础。",
        "协助与当地动监所等政府部门对接，根据要求补充、核验投保人的养殖信息，确保投保档案的合法合规，支持了新一季投保工作的顺利开展。",
        "参与对大型养殖企业的现场投保数据核查工作,通过实地清点养殖数量(如参与完成对某牛奶厂近8000头牛的清点核验),亲身实践了保险公司如何通过实地勘察来控制逆向选择与道德风险，保障了公司资产的安全。",
      ],
    },
    en: {
      company: "Zhongyuan Agricultural Insurance",
      role: "Archive Management Intern",
      period: "Jan 2023 - Feb 2023",
      bullets: [
        "Managed the systematic organization and digital entry of paper-based records for over 1,000 insured households across six townships, covering multiple insurance types such as livestock and vegetable seed production. Ensured 100% consistency and retrievability between electronic and paper files through structured filing and scanning, providing a reliable data foundation for subsequent claims review.",
        "Assisted in liaising with local government agencies such as the Animal Husbandry and Veterinary Station, supplementing and verifying policyholders’ farming information as required. Ensured the legality and compliance of insurance records, contributing to the smooth rollout of the new season’s underwriting work.",
        "Participated in field verification of insurance data for large-scale farming enterprises, including the physical headcount of nearly 8,000 cattle at a dairy company. Gained hands-on experience in how insurers use field inspections to mitigate adverse selection and moral hazard, safeguarding company assets.",
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
      period: "2023.03-2023.09",
      bullets: [
        "通过系统性检索全球线上展会及行业数据库, 精准筛选潜在合作企业, 并执行定向邮件营销进行触达。最终成功与3家海外公司(包括某知名椰子酒品牌)建立深度业务联系并推进至商务谈判阶段，有效验证了市场策略.",
        "针对目标产品（如椰子酒、香草粉）独立完成国内市场规模、竞争格局与进口政策的桌面研究，撰写市场分析报告，为合作谈判提供了关键的数据支撑与决策依据，成功提升了团队的专业可信度。",
        "作为核心成员，负责与海外公司代表进行线上会议沟通，深入探讨合作模式、进口分销流程及合规要求，甚至为其中一家公司制定了初步的市场进入与定价方案，展现了出色的跨文化沟通与商业推进能力。",
      ],
    },
    en: {
      name: "International Trade Startup Project",
      role: "Co-founder / BizDev Lead",
      period: "Mar 2023 - Sept 2023",
      bullets: [
        "Conducted systematic searches of global online exhibitions and industry databases to precisely identify potential partner companies. Executed targeted email marketing campaigns, successfully establishing in-depth business connections with three overseas companies (including a well-known coconut liquor brand) and advancing to the negotiation stage, effectively validating the market strategy.",
        "Independently carried out desk research on domestic market size, competitive landscape, and import policies for target products (e.g., coconut liquor, vanilla powder). Authored market analysis reports that provided critical data support and decision-making references for partnership negotiations, significantly enhancing the team’s professional credibility.",
        "Acted as a core team member in online meetings with overseas company representatives, engaging in in-depth discussions on cooperation models, import distribution processes, and compliance requirements. Developed an initial market entry and pricing plan for one company, demonstrating strong cross-cultural communication and business execution skills.",
      ],
    },
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    zh: {
      name: "本科毕业论文",
      role: "独立研究者",
      period: "2023.03-2023.06",
      bullets: [
        "独立完成了从选题、文献综述、理论框架搭建到实证分析的全流程科研工作。聚焦全球气候变化与数字经济交汇领域，旨在探索数字技术赋能农业减排的路径。",
        "熟练运用Stata等计量软件,收集并处理了“山河四省”各地级市的面板数据,构建固定效应模型进行回归分析.创新性地采用数字金融普惠指数作为核心解释变量,在控制多个变量的基础上,严谨验证了核心假设.",
        " 实证结果表明数字经济显著抑制了中原地区农业碳排放;同时,本研究深入分析了结论的局限性(如变量测度方法),并对内在机制进行了展望,展现了严谨的科研态度与批判性思维.",
      ],
    },
    en: {
      name: "Undergraduate Thesis",
      role: "Independent Researcher",
      period: "Mar 2023 - Jun 2023",
      bullets: [
        "Independently completed the full cycle of academic research, from topic selection, literature review, and theoretical framework construction to empirical analysis. Focused on the intersection of global climate change and the digital economy, aiming to explore pathways through which digital technologies can enable agricultural emission reductions.",
        "Proficiently applied econometric software such as Stata to collect and process panel data from prefecture-level cities across the “Four Central Plains” provinces. Constructed fixed effects regression models and innovatively employed the Digital Financial Inclusion Index as the core explanatory variable. Rigorously tested the central hypothesis while controlling for multiple covariates.",
        "Empirical results indicated that the digital economy significantly curbed agricultural carbon emissions in Central China. The study further examined limitations (e.g., variable measurement methods) and provided outlooks on underlying mechanisms, demonstrating a rigorous research attitude and critical thinking.",
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
            <a
              href="personal-website/Sylvia_Wang_CV.pdf"  // 这里改成你实际简历文件的名字
              download="Sylvia_Wang_CV.pdf"
              className="inline-flex items-center rounded-2xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition"
            >
              <Download className="w-4 h-4 mr-1" /> 
              {t("download", "下载简历", "Download CV")}
            </a>

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
              <CardTitle className="text-base">{t("contact","快速联系","Quick Contact")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/w010419sy@ruc.edu.cn"
                method="POST"
                className="space-y-2"
              >
                <Input type="text" name="name" placeholder={t("name","你的名字","Your name")} required />
                <Input type="email" name="email" placeholder={t("email","你的邮箱","Your email")} required />
                <Input type="text" name="message" placeholder={t("msg","你的问题","Your question")} required />

                {/* 防垃圾机器人 */}
                <input type="hidden" name="_captcha" value="false" />
                {/* 提交后跳转到感谢页面 */}
                <input type="hidden" name="_next" value="https://wsy-younger.github.io/personal-website/thanks.html" />

                <Button type="submit" className="w-full rounded-2xl">
                  {t("send","发送","Send")}
                </Button>
              </form>
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
