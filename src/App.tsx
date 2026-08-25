import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Button, Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Layers3,
  LinkedinIcon,
  Mail,
  Phone,
} from "lucide-react";

import photo from "../imgs/sua-imagem.png";
import iconCSharp from "../imgs/icon-Csharp.png";
import iconCss from "../imgs/icon-css.png";
import iconGit from "../imgs/icon-git.png";
import iconGithub from "../imgs/icon-github.png";
import iconHtml from "../imgs/icon-html.png";
import iconJavascript from "../imgs/icon-javascript.png";
import iconNext from "../imgs/icon-next.png";
import iconPhp from "../imgs/icon-php.png";
import iconPython from "../imgs/icon-python.png";
import iconReact from "../imgs/icon-react.png";
import iconTypescript from "../imgs/icon-typescript.png";
import iconVite from "../imgs/icon-vite.png";

type Technology = {
  name: string;
  icon: string;
  summary: string;
  details: string;
  focus: string;
};

type Project = {
  name: string;
  description: string;
  stack: string[];
  link: string;
};

const navigation = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

const projects: Project[] = [
  {
    name: "Cadastro JS",
    description:
      "Fluxo de login e cadastro com foco em usabilidade, feedback visual e navegação simples para o usuário final.",
    stack: ["HTML5", "CSS", "JavaScript"],
    link: "https://login-e-cadastro-js-html-e-css.vercel.app",
  },
  {
    name: "Calculadora Simples",
    description:
      "Calculadora avançada com histórico de operações, interface responsiva, animações fluidas e design moderno. Implementada com vanilla JavaScript e CSS avançado para demonstrar habilidades de frontend moderno e atenção aos detalhes de UX.",
    stack: ["HTML5", "CSS", "JavaScript"],
    link: "https://calculadora-simples-ashy-rho.vercel.app",
  },
  {
    name: "Controle Financeiro",
    description:
      "Aplicação de gestão financeira com organização de dados, visão prática e base para escalar funcionalidades.",
    stack: ["React", "JavaScript", "UI Design"],
    link: "https://controle-financeiro-lime.vercel.app",
  },
  {
    name: "Luna Cosméticos e Perfumaria",
    description:
      "E-commerce de cosméticos e perfumaria com catálogo de produtos, identidade visual elegante e experiência de navegação voltada para compras online.",
    stack: ["React", "JavaScript", "E-commerce"],
    link: "https://luna-cosmeticos-e-perfumaria.vercel.app/",
  },
  {
    name: "S.E.E.L.F.",
    description:
      "Projeto web com interface moderna e foco em uma experiência de navegação clara, responsiva e envolvente.",
    stack: ["React", "JavaScript", "UI Design"],
    link: "https://s-e-e-l-f.vercel.app/",
  },
];

const technologies: Technology[] = [
  {
    name: "React",
    icon: iconReact,
    summary: "Interfaces componentizadas e fluidas.",
    details:
      "Uso React para estruturar experiências escaláveis, com foco em estados previsíveis, composição de layout e animações suaves.",
    focus: "componentização, estado e experiência",
  },
  {
    name: "TypeScript",
    icon: iconTypescript,
    summary: "Mais segurança e manutenção.",
    details:
      "TypeScript ajuda a modelar melhor as features, reduzir erros e manter a base preparada para crescer com consistência.",
    focus: "tipagem, contratos e previsibilidade",
  },
  {
    name: "JavaScript",
    icon: iconJavascript,
    summary: "Base versátil para web moderna.",
    details:
      "Aplico JavaScript tanto em interfaces dinâmicas quanto em interações ricas, validações e comportamento de aplicações web.",
    focus: "interatividade e lógica de produto",
  },
  {
    name: "HTML5",
    icon: iconHtml,
    summary: "Estrutura semântica e acessível.",
    details:
      "Organizo conteúdo com semântica, clareza e boa hierarquia visual para entregar páginas legíveis e preparadas para SEO.",
    focus: "semântica e estrutura",
  },
  {
    name: "CSS",
    icon: iconCss,
    summary: "Identidade visual e refinamento.",
    details:
      "Uso CSS para criar interfaces com profundidade, glassmorphism, gradientes, responsividade e microdetalhes que elevam o resultado.",
    focus: "layout, animação e acabamento",
  },
  {
    name: "Next.js",
    icon: iconNext,
    summary: "Base para apps rápidos e robustos.",
    details:
      "Tenho familiaridade com ecossistema React moderno e com a mentalidade de performance, rotas e experiência mais profissional.",
    focus: "performance e arquitetura",
  },
  {
    name: "C#",
    icon: iconCSharp,
    summary: "Visão de back-end e ecossistema .NET.",
    details:
      "Conhecimento útil para APIs, lógica de negócio e integração com aplicações corporativas que exigem organização e clareza.",
    focus: "lógica de negócio e APIs",
  },
  {
    name: "PHP",
    icon: iconPhp,
    summary: "Back-end pragmático e direto.",
    details:
      "PHP amplia minha visão de desenvolvimento web completo, principalmente em sistemas dinâmicos e integrações tradicionais.",
    focus: "servidor e fluxo web",
  },
  {
    name: "Python",
    icon: iconPython,
    summary: "Versatilidade para automação e web.",
    details:
      "Python entra como apoio para scripts, automações, estudos e soluções que pedem produtividade e clareza de código.",
    focus: "automação e prototipação",
  },
  {
    name: "Git",
    icon: iconGit,
    summary: "Organização de código e versionamento.",
    details:
      "Versionamento faz parte do meu fluxo para evoluir projetos com segurança, clareza de histórico e colaboração.",
    focus: "versionamento e fluxo de trabalho",
  },
  {
    name: "GitHub",
    icon: iconGithub,
    summary: "Entrega, portfólio e colaboração.",
    details:
      "Uso GitHub para publicar projetos, documentar evolução e apresentar meu trabalho de forma profissional e acessível.",
    focus: "publicação e colaboração",
  },
  {
    name: "Vite",
    icon: iconVite,
    summary: "Desenvolvimento veloz e moderno.",
    details:
      "Vite acelera a criação de interfaces modernas com recarga rápida, build eficiente e ótima experiência para desenvolvimento.",
    focus: "DX e velocidade",
  },
];

const focusAreas = [
  {
    title: "Front-end com estética forte",
    text: "Interfaces que equilibram clareza, impacto visual e sensação de produto moderno.",
    icon: Layers3,
  },
  {
    title: "Base full-stack em formação",
    text: "Conhecimentos em front-end, back-end e ferramentas para construir soluções mais completas.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Evolução constante",
    text: "Universitário, curioso e sempre melhorando repertório técnico e visual a cada projeto.",
    icon: GraduationCap,
  },
];

const sectionAnimation = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(technologies[0]);
  const techCardRef = useRef<HTMLDivElement | null>(null);

  const selectedIndex = useMemo(
    () =>
      selectedTech
        ? technologies.findIndex((technology) => technology.name === selectedTech.name)
        : -1,
    [selectedTech],
  );

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      if (!target || !selectedTech) {
        return;
      }

      if (target.closest("[data-tech-trigger='true']")) {
        return;
      }

      if (techCardRef.current?.contains(target)) {
        return;
      }

      setSelectedTech(null);
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [selectedTech]);

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[72px_72px] opacity-30" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-[0_0_40px_rgba(15,23,42,0.55)] backdrop-blur-xl md:px-6">
          <a href="#inicio" className="text-sm font-semibold tracking-[0.22em] text-white/90 uppercase">
            Diogo Maggio
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/65 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            as="a"
            href="#projetos"
            color="secondary"
            radius="full"
            className="bg-violet-500/90 font-semibold text-white shadow-lg shadow-violet-500/30"
          >
            Ver projetos
          </Button>
        </nav>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <section id="inicio" className="grid min-h-[calc(100vh-9rem)] scroll-mt-28 items-center gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionAnimation}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="space-y-7"
          >
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Desenvolvedor de software.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                Sou Diogo Maggio de Azevedo, desenvolvedor full-stack em formação, com foco em
                experiências web elegantes, navegação fluida e interfaces que valorizam tanto o
                visual quanto a clareza do produto.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="https://www.linkedin.com/in/diogo-maggio-9b8195239/"
                target="_blank"
                rel="noreferrer"
                size="lg"
                radius="full"
                color="secondary"
                endContent={<LinkedinIcon size={18} />}
                className="bg-violet-500 font-semibold text-white shadow-lg shadow-violet-500/30"
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href="https://github.com/diogomaggio"
                target="_blank"
                rel="noreferrer"
                size="lg"
                radius="full"
                variant="bordered"
                startContent={<Github size={18} />}
                className="border-white/15 bg-white/5 font-semibold text-white"
              >
                GitHub
              </Button>
            </div>

          </motion.div>

        </section>

        <motion.section
          id="sobre"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionAnimation}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-4xl bg-cyan-400/14 blur-3xl" />
            <div className="floating-photo relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.16),transparent_35%)]" />
              <img
                src={photo}
                alt="Diogo Maggio"
                className="relative z-10 h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Chip className="border border-cyan-400/20 bg-cyan-500/10 text-cyan-200" radius="full">
              Sobre mim
            </Chip>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Um perfil técnico com boa comunicação visual e vontade real de evoluir.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-white/72 md:text-lg">
                Sou um universitário que já participou de projetos acadêmicos e extracurriculares,
                com experiência profissional anterior em rotina administrativa e boa familiaridade com
                organização, ferramentas digitais e responsabilidade no dia a dia. Hoje meu foco está
                em desenvolvimento web, criando interfaces com JavaScript, React, HTML e CSS, sem
                perder de vista a visão full-stack com Python, PHP e C#.
              </p>
              <p className="max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                Também tenho contato com SQL, pacote Office, plataformas no-code e ecossistemas mais
                modernos como Next.js e Vite. Meu objetivo é transformar repertório técnico em
                experiências visuais fortes, profissionais e úteis para quem usa o produto.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Card className="glass-card h-full border border-white/10 bg-white/5">
                      <CardBody className="gap-3 p-5">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-500/12 text-cyan-200">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                        <p className="text-sm leading-7 text-white/65">{area.text}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projetos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
          transition={{ duration: 0.6 }}
          className="scroll-mt-28 space-y-8"
        >
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="space-y-4">
              <Chip className="border border-violet-400/20 bg-violet-500/10 text-violet-200" radius="full">
                Projetos em destaque
              </Chip>
              <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
                Prática, determinação e tempo. Com esses elementos, crio projetos que fazem a diferença.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Alguns projetos os quais já dediquei algum tempo, consolidando e melhorando cada vez mais minhas habilidades e conhecimentos.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <Card className="glass-card group h-full border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1">
                  <CardBody className="flex h-full flex-col gap-5 p-6">
                    <div className="space-y-3">
                      <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/45">
                        Projeto {index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                      <p className="text-sm leading-7 text-white/65">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Chip
                          key={`${project.name}-${item}`}
                          variant="flat"
                          radius="full"
                          className="border border-white/10 bg-black/20 text-white/75"
                        >
                          {item}
                        </Chip>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                      <Button
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        radius="full"
                        color="secondary"
                        endContent={<ArrowUpRight size={16} />}
                        className="bg-violet-500 font-semibold text-white"
                      >
                        Acessar projeto
                      </Button>
                      <Button
                        as="a"
                        href="https://github.com/diogomaggio"
                        target="_blank"
                        rel="noreferrer"
                        radius="full"
                        variant="bordered"
                        startContent={<Github size={16} />}
                        className="border-white/10 bg-white/5 font-semibold text-white"
                      >
                        Ver código
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="habilidades"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionAnimation}
          transition={{ duration: 0.6 }}
          className="grid scroll-mt-28 gap-8 xl:grid-cols-[1.08fr_0.92fr]"
        >
          <div className="space-y-5">
            <Chip className="border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200" radius="full">
              Habilidades & stack
            </Chip>
            <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
              Tecnologias variadas as quais possuo conhecimento/experiência
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/67 md:text-lg">
              Quando se trata de linguagens, acredito que mesmo sem um profundo conhecimento, quando se entende a lógica por trás delas, é possível aprender rapidamente e se adaptar a novas experiências.
            </p>

            <div className="skill-shell relative flex min-h-144 items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.14),transparent_42%)]" />
              <div className="pointer-events-none absolute inset-[14%] rounded-full border border-dashed border-white/10" />
              <div className="pointer-events-none absolute inset-[26%] rounded-full border border-white/10" />

              <div className="skill-orbit absolute inset-0">
                {technologies.map((technology, index) => {
                  const orbitStyle = {
                    "--angle": `${index * (360 / technologies.length)}deg`,
                  } as CSSProperties;

                  const isActive = selectedTech?.name === technology.name;

                  return (
                    <div key={technology.name} className="skill-node" style={orbitStyle}>
                      <button
                        type="button"
                        data-tech-trigger="true"
                        onClick={() => setSelectedTech(technology)}
                        className={`skill-node-button ${
                          isActive
                            ? "border-violet-300/50 bg-violet-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                            : "border-white/10 bg-slate-950/65 hover:border-white/20 hover:bg-white/8"
                        }`}
                        aria-pressed={isActive}
                        aria-label={`Selecionar ${technology.name}`}
                      >
                        <img src={technology.icon} alt={technology.name} className="h-10 w-10 object-contain" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {selectedTech ? (
                <motion.div
                  key={selectedTech.name}
                  ref={techCardRef}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.28 }}
                  className="relative z-10 max-w-sm rounded-4xl border border-white/10 bg-slate-950/80 p-6 text-center shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl"
                >
                  <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/7">
                    <img src={selectedTech.icon} alt={selectedTech.name} className="h-10 w-10 object-contain" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                      tecnologia {selectedIndex + 1}
                    </p>
                    <h3 className="text-3xl font-bold text-white">{selectedTech.name}</h3>
                    <p className="text-base font-medium text-violet-200">{selectedTech.summary}</p>
                    <p className="text-sm leading-7 text-white/65">{selectedTech.details}</p>
                    <Chip className="border border-violet-400/20 bg-violet-500/10 text-violet-100" radius="full">
                      foco: {selectedTech.focus}
                    </Chip>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 content-start md:grid-cols-2 xl:grid-cols-1">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.06, duration: 0.38 }}
                >
                  <Card className="glass-card border border-white/10 bg-white/5">
                    <CardBody className="flex flex-row gap-4 p-5">
                      <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-500/12 text-fuchsia-200">
                        <Icon size={20} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm leading-7 text-white/65">{item.text}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="contato"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
          transition={{ duration: 0.55 }}
          className="scroll-mt-28"
        >
          <Card className="glass-card overflow-hidden border border-white/10 bg-white/5">
            <CardBody className="relative gap-6 overflow-hidden px-6 py-8 md:px-8 md:py-10 lg:flex lg:flex-row lg:items-center lg:justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_right,rgba(168,85,247,0.16),transparent_34%)]" />
              <div className="relative z-10 max-w-2xl space-y-4">
                <Chip className="border border-white/12 bg-white/8 text-white/75" radius="full">
                  Vamos conversar
                </Chip>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Se você curtiu o portfólio, entre em contato, vamos trabalhar juntos!
                </h2>
                <p className="text-base leading-8 text-white/65 md:text-lg">
                  Estou ansioso para colaborar em projetos incríveis e criar soluções inovadoras juntos, vamos fazer acontecer.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-4">
                <Button
                  as="a"
                  href="mailto:diogomaggio@gmail.com"
                  size="lg"
                  radius="full"
                  color="secondary"
                  startContent={<Mail size={18} />}
                  className="bg-cyan-500 font-semibold text-slate-950"
                >
                  E-mail
                </Button>
                <Button
                  as="a"
                  href="tel:+5534988150059"
                  size="lg"
                  radius="full"
                  variant="bordered"
                  startContent={<Phone size={18} />}
                  className="border-white/12 bg-emerald-500 font-semibold text-white"
                >
                  Telefone
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/diogo-maggio-9b8195239/"
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  radius="full"
                  color="secondary"
                  startContent={<LinkedinIcon size={18} />}
                  className="bg-violet-500 font-semibold text-white"
                >
                  LinkedIn
                </Button>
                <Button
                  as="a"
                  href="https://github.com/diogomaggio"
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  radius="full"
                  variant="bordered"
                  startContent={<Github size={18} />}
                  className="border-white/12 bg-mauve-700 font-semibold text-white"
                >
                  GitHub
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
