import Repository, { getApiUrl } from "./github.repository";

export async function getData(endPoint: string): Promise<any> {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;
  const url = `${getApiUrl()}${endPoint}`;

  const response = accessToken
    ? await fetch(url, { headers: { Authorization: `token ${accessToken}` } })
    : await fetch(url);

  return await response.json();
}

export async function getRepositoryOfUser(
  userName: string
): Promise<Repository[]> {
  const repositoryArray: Repository[] = [];
  const repositories = await getData(`/users/${userName}/repos`);

  for (const repo of repositories) {
    if (repo.fork || repo.archived || !repo.description) {
      continue;
    }

    repositoryArray.push({
      fullName: repo.full_name,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      defaultBranch: repo.default_branch,
    });
  }

  return repositoryArray;
}
