import { useEffect } from "react";

import Repository from "@/lib/github/github.repository";
import { getRepositoryOfUser } from "@/lib/github/repository.service";

import Header from "@/components/Header";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import ProjectCard from "@/components/project/ProjectCard";

export default function Projects({
  repositories,
}: {
  repositories: Repository[];
}) {
  const repoPerRow =
    repositories.length / 2 === 1 ? 3 : repositories.length / 2;
  return (
    <>
      <Header />
      <Navigation />
      <header className="container vh-100 d-flex justify-content-center align-items-center">
        <div className={`row row-cols-1 row-cols-md-${repoPerRow} g-4`}>
          {repositories.map((repository) => {
            return (
              <ProjectCard key={repository.name} repository={repository} />
            );
          })}
        </div>
      </header>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const repositories: Repository[] = await getRepositoryOfUser("alexissdev");
  return { props: { repositories } };
}
