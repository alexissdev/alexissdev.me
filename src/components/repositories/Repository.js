import Card from "../card/Card";
import Button from "react-bootstrap/Button";

import "./Repository.css";

export default function Repository({ language, name, description, svn_url }) {
  return (
    <div>
      <Card title={name} description={description}  />
    </div>
  );
}
