import Repository from "@/lib/github/github.repository";
import ProjectCard from "./ProjectCard";

export default function Projects({
  repositories,
}: {
  repositories: Repository[];
}) {
  return (
    <div>
      <div className="container p-5 d-flex justify-content-center align-items-center">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {repositories.map((repository) => {
            return (
              <ProjectCard key={repository.name} repository={repository} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
