import graduate from "../assets/graduation.png";
import contact from "../assets/contactme.png";
import experience from "../assets/experiences.png";
import home from "../assets/home4.png";
import project from "../assets/project.png";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Sidebar() {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen w-20 hidden md:flex items-center justify-center z-20">
        <ul className="flex flex-col items-center gap-6">
          <SidebarItem id="home" icon={home} />
          <SidebarItem id="skills" icon={graduate} />
          <SidebarItem id="experience" icon={experience} />
          <SidebarItem id="projects" icon={project} />
          <SidebarItem id="contact" icon={contact} />
        </ul>
      </div>

      {/* MOBILE BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 h-14 flex md:hidden items-center justify-around bg-white/80 backdrop-blur-md z-20">
        <SidebarItem id="home" icon={home} />
        <SidebarItem id="skills" icon={graduate} />
        <SidebarItem id="experience" icon={experience} />
        <SidebarItem id="projects" icon={project} />
        <SidebarItem id="contact" icon={contact} />
      </div>
    </>
  );
}

function SidebarItem({ id, icon }) {
  return (
    <button onClick={() => scrollTo(id)} className="cursor-pointer">
      <img src={icon} className="w-6 icon-img" />
    </button>
  );
}
