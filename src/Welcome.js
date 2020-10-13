import React, { useState } from "react";

const Welcome = ({ playerNames }) => {
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div className="wrapper">
      <div className="welcome">
        <form>
          <div className="form-group">
            <label>Player 1</label>
            <input
              type="name"
              id="player1"
              name="player1"
              className="form-control"
              onChange={onChange}
            />

            <label>Player 2</label>
            <input
              type="name"
              id="player2"
              name="player2"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              playerNames(formData);
            }}
            className="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
