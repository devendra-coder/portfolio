import useRevealOnScroll from "./useRevealOnScroll";
import useParallax from "./useParallax";
import { useEffect } from "react";

export default function App() {
  useRevealOnScroll();
  useParallax();
  useEffect(() => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 800); // Adjust timing if needed
}, []);
  return (
    <>
  {/* ================= PRELOADER ================= */}
  <div id="preloader">
    <div className="loader-text">DS</div>
  </div>
    <div className="page-load min-h-screen bg-[#0b0f17] text-white font-sans">

      {/* ================= NAVBAR ================= */}
      <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50 py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Devendra Singh
        </h1>

        <div className="flex gap-8 text-sm">
          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="px-8 pt-20 pb-32 flex flex-col items-start gap-6 relative overflow-hidden min-h-[500px]">

        {/* Background Blobs */}
        <div className="parallax-blob absolute top-[-180px] right-[-180px] w-[650px] h-[650px]
                bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800
                rounded-full blur-3xl opacity-40 animate-pulse-slow z-0"></div>

        <div className="parallax-blob absolute bottom-[-150px] left-[-150px] w-[550px] h-[550px]
                bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800
                rounded-full blur-3xl opacity-35 animate-float z-0"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-5 pointer-events-none z-0"></div>

        {/* HERO CONTENT */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full z-10">

          {/* Left Text */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Devendra Singh
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I’m a data analyst who enjoys turning complex data into actionable insights.
              I work extensively with SQL, Python, and Power BI to build clean data pipelines,
              reliable reporting models, and dashboards that communicate information clearly.
            </p>

            <div className="flex gap-6 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold rounded-lg 
                           bg-gradient-to-r from-blue-500 to-purple-600 
                           hover:opacity-90 transition-all shadow-lg shadow-purple-700/20"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold rounded-lg 
                           border border-white/20 hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Floating Cards */}
          <div className="hidden md:block relative w-[350px] h-[350px]">
            <div className="absolute inset-0 flex flex-col gap-4 items-end justify-center">

              <div className="px-4 py-3 bg-white/10 border border-purple-300/20 rounded-lg 
                              backdrop-blur-md text-sm animate-float-slow">
                <span className="text-purple-300 font-semibold">SQL Expert</span>
                <p className="text-xs text-gray-300">Window functions, ETL, DWH</p>
              </div>

              <div className="px-4 py-3 bg-white/10 border border-blue-300/20 rounded-lg 
                              backdrop-blur-md text-sm animate-float-slow" style={{ animationDelay: "0.3s" }}>
                <span className="text-blue-300 font-semibold">Python</span>
                <p className="text-xs text-gray-300">Pandas, EDA, scripts</p>
              </div>

              <div className="px-4 py-3 bg-white/10 border border-indigo-300/20 rounded-lg 
                              backdrop-blur-md text-sm animate-float-slow" style={{ animationDelay: "0.6s" }}>
                <span className="text-indigo-300 font-semibold">Power BI</span>
                <p className="text-xs text-gray-300">DAX + Dashboards</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20"></div>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="px-8 py-24 relative">
  <h2 className="section-title delay-1 text-4xl font-bold mb-12 text-center 
        bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Data Jobs Dashboard",
        desc: "Interactive Power BI dashboard analyzing global data jobs, salaries, skills, and hiring trends.",
        tech: ["Power BI", "DAX", "Data Modeling"],
        link: "https://github.com/devendra-coder/data-jobs-dashboard",
      },
      {
        title: "SQL Data Analytics Project",
        desc: "Medallion architecture project with SQL transformations, KPIs, aggregations, and end-to-end reports.",
        tech: ["SQL Server", "Window Functions", "ETL"],
        link: "https://github.com/devendra-coder/sql-data-analytics-project",
      },
      {
        title: "SQL Data Warehouse Project",
        desc: "Full data warehouse with star schema, fact/dimension tables, and KPI-ready data models.",
        tech: ["SQL", "Data Warehouse", "Star Schema", "ETL"],
        link: "https://github.com/devendra-coder/sql-data-warehouse-project",
      },
      {
        title: "Excel Salary Calculator",
        desc: "Clean Excel dashboard that predicts salaries across countries, companies, and experience levels.",
        tech: ["Excel", "Pivot Tables", "Data Cleaning"],
        link: "https://github.com/devendra-coder/excel-job-salary-calculator",
      },
      {
        title: "Data Analyst Job Market Research & Insights",
        desc: "Python-powered analysis of 32K+ job postings revealing demand, salary trends, and optimal skills.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        link: "https://github.com/devendra-coder/python-data-project",
      },
      {
        title: "Data Jobs Dataset + EDA",
        desc: "Custom data jobs dataset with Python-based EDA, grouping, visualization, and insights.",
        tech: ["Python", "Pandas", "Matplotlib"],
        link: "https://github.com/devendra-coder/data-jobs",
      },
    ].map((project, idx) => (
      <div
        key={project.title}
        className={`card reveal delay-${idx + 1} relative overflow-hidden
              p-6 rounded-xl bg-[#10141f] border border-white/10`}
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-white/10 text-purple-300 border border-purple-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-white/10">
          <a
            href={project.link}
            target="_blank"
            className="inline-block text-sm px-4 py-2 border border-purple-500/40 rounded-lg 
                             hover:bg-purple-600 hover:border-purple-600 transition-all"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20"></div>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="px-8 py-24 relative z-20">
        <h2 className="section-title delay-1 text-4xl font-bold mb-10 text-center 
              bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
  About Me
</h2>


        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-12">
            I’m a data analyst who enjoys turning complex data into actionable insights.
            I work with SQL, Python, and Power BI to build clean data pipelines,
            reliable reporting models, and dashboards that communicate clearly.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-[#10141f] border border-white/10">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
                What I’m Good At
              </h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>✔ SQL (Joins, Window Functions, ETL)</li>
                <li>✔ Python for EDA & Analysis</li>
                <li>✔ Power BI dashboards & data modeling</li>
                <li>✔ Excel analytics & automation</li>
                <li>✔ Cleaning & structuring data</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#10141f] border border-white/10">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
                What I Enjoy Working On
              </h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>✔ Dashboards that tell a story</li>
                <li>✔ End-to-end analytics projects</li>
                <li>✔ Data modeling (Star Schema / DWH)</li>
                <li>✔ Automating repetitive tasks</li>
                <li>✔ Exploring new datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20"></div>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="px-8 py-24 relative z-20">
        <h2 className="section-title delay-1 text-4xl font-bold mb-10 text-center 
              bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
  Contact Me
</h2>


        <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
          Whether you want to discuss a project, collaborate, or just say hello,
          I’m always open to connecting. Reach out anytime.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="mailto:devendras162002@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/10 rounded-lg 
                       hover:border-purple-400/40 hover:bg-white/5 transition-all text-gray-300"
          >
            <span className="text-purple-300 text-2xl">✉️</span>
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/devendra-singh-adhikari"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/10 rounded-lg 
                       hover:border-blue-400/40 hover:bg-white/5 transition-all text-gray-300"
          >
            <span className="text-blue-300 text-2xl">🔗</span>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/devendra-coder"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/10 rounded-lg 
                       hover:border-gray-400/40 hover:bg-white/5 transition-all text-gray-300"
          >
            <span className="text-gray-300 text-2xl">🐱‍💻</span>
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20"></div>

      {/* ================= FOOTER ================= */}
      <footer className="px-8 py-10 border-t border-white/10 text-center bg-[#0b0f17]">

        <p className="text-gray-400 text-sm">
          Built with ❤️ using React & Tailwind CSS
        </p>

        <p className="text-gray-500 text-xs mt-2">
          © {new Date().getFullYear()} Devendra Singh. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:devendras162002@gmail.com" className="hover:text-purple-300 transition-all">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/devendra-singh-adhikari"
            target="_blank"
            className="hover:text-blue-300 transition-all"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/devendra-coder"
            target="_blank"
            className="hover:text-gray-300 transition-all"
          >
            GitHub
          </a>
        </div>

      </footer>

      {/* ================= Scroll To Top Button ================= */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 
                   hover:opacity-90 text-white px-4 py-3 rounded-full shadow-lg 
                   shadow-purple-700/30 backdrop-blur-md transition-all z-50"
      >
        ↑
      </a>

    </div>
    </>
  );
}
