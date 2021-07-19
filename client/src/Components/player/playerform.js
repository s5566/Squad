import React, { useContext, useState } from "react";
import PlayerContext from "../../Context/Players/playerContext";

const Playerform = () => {
  const playerContext = useContext(PlayerContext);

  const { addPlayer } = playerContext;

  const [player, setPlayer] = useState({
    name: "",
    playerNumber: "",
    role: "",
    status: "Rest",
  });

  const { name, playerNumber, role, status } = player;

  const onSubmit = (e) => {
    e.preventDefault();
    addPlayer(player);
    setPlayer({
      name: "",
      playerNumber: "",
      role: "",
      status: "rest",
    });
  };

  const onChange = (e) => {
    return setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  return (
    <div className='container player-form'>
      <form className='add-form' onSubmit={onSubmit}>
        <h1 style={{ textAlign: "center", color: "black" }}>
          Add a player to your sqaud
        </h1>
        <div className='form-control'>
          <label>NAME</label>
          <input
            type='text'
            placeholder='Player Name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-control'>
          <label>PLAYER NUMBER</label>
          <input
            type='number'
            placeholder='Player Number'
            name='playerNumber'
            value={playerNumber}
            onChange={onChange}
          />
        </div>
        <div className='form-control'>
          <label>ROLE/POSITION</label>
          <input
            type='text'
            placeholder='Player Position'
            name='role'
            value={role}
            onChange={onChange}
          />
        </div>

        <div className='form-control form-control-check'>
          <label>STATUS:</label>
          <div className='status-radio'>
            <input
              type='radio'
              name='status'
              value='playing'
              checked={status === "playing"}
              onChange={onChange}
            />
            <label htmlFor='Playing'>Playing</label>
          </div>
          <div className='status-radio'>
            <input
              type='radio'
              name='status'
              value='substitute'
              checked={status === "substitute"}
              onChange={onChange}
            />
            <label htmlFor='Playing'>Substitute</label>
          </div>
          <div className='status-radio'>
            <input
              type='radio'
              name='status'
              value='rest'
              checked={status === "rest"}
              onChange={onChange}
            />
            <label htmlFor='Playing'>Rest</label>
          </div>
        </div>
        <button className='btn btn-block'>Add Player</button>
      </form>
    </div>
  );
};

export default Playerform;
