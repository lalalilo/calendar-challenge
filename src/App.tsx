import React from "react";
import Calendar from "./calendar";
import styled from "styled-components";

export const App: React.FC = () => {
  return <PositionedCalendar />;
};

const PositionedCalendar = styled(Calendar)`
  margin-left: 50px;
  margin-top: 50px;
`;

export default App;
