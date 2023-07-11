import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useThemeContext } from "../../hooks/themeHook";

function Github() {
  const { dark } = useThemeContext();

  const colourTheme = dark ? "dark" : "light";
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="green">Github</strong> Activity
      </h1>

      <GitHubCalendar
        username="vaibhavsr007"
        blockSize={16}
        blockMargin={5}
        colorScheme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
