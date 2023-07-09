import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from "../../actions/user";
import "./YoutubeCard.css";
const YoutubeCard = ({
  url = "https://youtube.com/6packprogrammer",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const count = 50;
  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };

  return (
    <div
      className="vline youtube-card"
      style={{
        marginTop: "-40rem",
        marginLeft: "110rem",
        width: "0px",
        height: "93rem",
        backgroundColor: "#666666",
        borderRadius: "50%",
      }}
    >
      {" "}
      <div
        className="vline"
        
        style={{
          marginTop: "-5rem",
          marginLeft: "1rem",
          width: "0rem",
          height: "5px",
          backgroundColor: "#555555",
          borderRadius: "50%",
        }}
      ></div>{" "}
      <div
        className="vline"
        style={{
          marginTop: "5rem",
          marginLeft: "1rem",
          width: "0rem",
          height: "5px",
          backgroundColor: "#555555",
          borderRadius: "50%",
        }}
      ></div>{" "}
      <div
        className="vline"
        style={{
          marginTop: "5rem",
          marginLeft: "1rem",
          width: "0rem",
          height: "5px",
          backgroundColor: "#555555",
          borderRadius: "50%",
        }}
      ></div>
      <div
        className="vline"
        style={{
          marginTop: "5rem",
          marginLeft: "1rem",
          width: "0rem",
          height: "5px",
          backgroundColor: "#555555",
          borderRadius: "50%",
        }}
      ></div>
      <div
        className="Cont1"
        style={{
          marginTop: "5rem",
          marginLeft: "-75rem",
          width: "45vw",
          height: "70vh",
          backgroundColor: "#777777",
        }}
      >
        {" "}
        <div
          className="vline"
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
            width: "20px",
            height: "20px",
            backgroundColor: "green",
            borderRadius: "50%",
          }}
        ></div>{" "}
        <div
          className="vline"
          style={{
            marginTop: "0rem",
            marginLeft: "1rem",
            width: "0px",
            height: "0px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        ></div>
              <div
          className="vline"
          style={{
            marginTop: "0rem",
            marginLeft: "1rem",
            width: "20px",
            height: "20px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        ></div>
        <div
          className="vline"
          style={{
            marginTop: "0rem",
            marginLeft: "1rem",
            width: "20px",
            height: "20px",
            backgroundColor: "#777777",
            borderRadius: "50%",
          }}
        >
          <p
            style={{
              marginTop: "0rem",
              paddingLeft: "13rem",
              width: "550px",
              height: "900px",
              borderRadius: "50%",
            }}
            className="text1"
          >
            <a href={url} target="blank">
              <img src={image} alt="Video" />
              <br />
              <div className="next"><span className="quote-left">“</span>
              <Typography variant="h4" className="quote-text text">
                <Typography className="text1">
                  {title.substring(10, 500)}
                </Typography>{" "}
              </Typography>
              <span className="quote-right">”</span></div>
            </a>
            <Typography className="text1 Cont2">
              {title.substring(0, 10)}
            </Typography>
            {isAdmin && (
              <Button
                style={{
                  margin: "auto",
                  display: "block",
                  color: "rgba(40,40,40,0.7)",
                }}
                onClick={() => deleteHandler(id)}
              >
                <FaTrash />
              </Button>
            )}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
