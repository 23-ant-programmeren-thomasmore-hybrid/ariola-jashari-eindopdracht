import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mijn projecten
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/gymradar.png"
          title="Fitness Project"
          description="Gymradar is een verbeterde versie van het Fitness Platform met gebruik van een realtime database en verschillende nieuwe features."
        />
        <ProjectCard
          src="/smak.png"
          title="SNAPPING S.M.A.K"
          description="Je krijgt elke dag een Notificatie om 7u met de vorm van vandaag. Zorg dat je tegen het einde van de dag een foto hebt gemaakt van de gevraagde vorm."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Portfolio"
          description=" Dit is de allereerste portfolio die ik ooit heb gemaakt."
        />
      </div>
    </div>
  );
};

export default Projects;
