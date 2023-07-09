import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { FaCalendar } from "react-icons/fa";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="white"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="Event" color="primary">
                <FaCalendar />
              </TimelineDot>
              <div
                className="vline vline12" 
                style={{
                  marginTop: "0rem",
                  marginLeft: "0rem",
                  width: "5px",
                  height: "6rem",
                  backgroundColor: "#444444",
                  borderRadius: "50%",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  sx={{ py: "12px", px: 2 }}>
              <div
                className="vline Cont11 Cont8"
                style={{
                  marginTop: "0rem",
                  marginLeft: "10rem",
                  width: "0px",
                  height: "20px",
                  backgroundColor: "green",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                className="vline Cont11 vline1"
                style={{
                  marginTop: "1rem",
                  marginLeft: "10rem",
                  width: "0px",
                  height: "20px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                className="vline Cont11  vline1 Cont8"
                style={{
                  marginTop: "2rem",
                  marginLeft: "10rem",
                  width: "0px",
                  height: "20px",
                  backgroundColor: "#777777 ",
                  borderRadius: "50%",
                }}
              >
                {" "}
                <div
                  className="vline vline1"
                  style={{
                    marginTop: "2rem",
                    marginLeft: "-2rem",
                    width: "0px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                ></div>
                <p
                  style={{
                    marginLeft: "-4rem",
                    marginTop: "-10.5rem",
                   
                    width: "550px",
                    height: "600px",
                    borderRadius: "50%",
                  }}
                  className="text1 vline1 Cont12"
                >
                  {new Date(item.date).toLocaleDateString()}
                  <br />
                  {item.title}
                  <br />
                  {item.description}
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
