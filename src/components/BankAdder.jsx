import { useState } from "react";

const BankAdder = ({ setActivityBank }) => {
  const [newActivityInput, setNewActivityInput] = useState("");
  const [newCalInput, setNewCalInput] = useState(0);
  const [newZoneInput, setNewZoneInput] = useState("");

  const handleNewActivityChange = (event) => {
    setNewActivityInput(event.target.value);
  };
  const handleNewCalChange = (event) => {
    setNewCalInput(event.target.value);
    console.log(newCalInput);
  };
  const handleNewZoneChange = (event) => {
    setNewZoneInput(event.target.value);
    console.log(newZoneInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setActivityBank((currentActivityBank) => {
      return [
        ...currentActivityBank,
        { activity: newActivityInput, cals: newCalInput, zone: newZoneInput },
      ];
    });
    setNewActivityInput("");
    setNewCalInput(0);
    setNewZoneInput("");
    event.target.reset();
  };

  return (
    <section className="dark-panel">
      <p className="light-text">
        Add a new workout activity below or jump right to get stuck in right
        away!
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="activity-input" className="input-label light-text">
          Activity:
        </label>
        <input
          onChange={handleNewActivityChange}
          id="activity-input"
          type="text"
          className="input-box"
        />
        <label htmlFor="calories-input" className="input-label light-text">
          Calories p/rep:
        </label>
        <input
          onChange={handleNewCalChange}
          id="calories-input"
          type="text"
          className="input-box"
        />
        <label htmlFor="zone-input" className="input-label light-text">
          Workout zone:
        </label>
        <select
          onChange={handleNewZoneChange}
          id="zone-input"
          className="input-box"
        >
          <option value={""} defaultValue>
            Select
          </option>
          <option value={"Mixed"}>Mixed</option>
          <option value={"Arms"}>Arms</option>
          <option value={"Legs"}>Legs</option>
          <option value={"Core"}>Core</option>
        </select>
        <br></br>
        <button className="light-text" id="submit-activity">
          Add activity
        </button>
      </form>
    </section>
  );
};

export default BankAdder;
