export default interface Repository {
  fullName: string;
  name: string;
  description: string;
  stars: number;
  defaultBranch: string;
}

export const getApiUrl = (): string => {
  return "https://api.github.com";
};
