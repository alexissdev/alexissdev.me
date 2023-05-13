import Repository from "@/lib/github/github.repository";
import ProjectCard from "./ProjectCard";

export default function Projects({
  repositories,
}: {
  repositories: Repository[];
}) {
  return (
    <div className="bg-primary pt-5 pb-5 md:pt-8 md:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 px-10">
          <div className="flex flex-wrap -mx-1">
            {Object.entries(repositories).map(([key, repo]) => (
              <ProjectCard key={key} repository={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
