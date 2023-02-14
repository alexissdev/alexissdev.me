import { useEffect, useState } from "react";

import "./Repositories.css";
import RepositoriesLoading from "./loading/RepositoriesLoading";
import Repository from "./Repository";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const findData = async () => {
      await fetch("https://api.github.com/users/alexissdev/repos?per_page=6&sort=updated")
        .then((response) => response.json())
        .then((data) => {
          setRepositories(data);
        });
    };

    findData();
  }, [repositories]);

  return (
    <div>
      {!repositories ? (
        <RepositoriesLoading />
      ) : (
        <div className="container vh-100">
          {repositories.map((item) => (
            <Repository key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
