import React from "react";
import styled from "styled-components";

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  return <CalendarWrapper className={className}></CalendarWrapper>;
};

const CalendarWrapper = styled.div`
  width: 302px;
  height: 372px;
  border-radius: 5px;
  box-shadow: 0 2px 20px 0 rgba(130, 178, 255, 0.15);
  background-color: #ffffff;
`;

export default Calendar;
