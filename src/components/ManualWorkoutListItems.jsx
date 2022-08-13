import { useState } from "react";

const ManualWorkoutListItems = ({ setWorkoutListItems, activityBank }) => {
  const [addWorkoutActivityInput, setAddWorkoutActivityInput] = useState("");
  const [addWorkoutRepsInput, setAddWorkoutRepsInput] = useState(0);

  const handleAddWorkoutActivityChange = (event) => {
    setAddWorkoutActivityInput(event.target.value);
  };

  const handleAddWorkoutRepsChange = (event) => {
    setAddWorkoutRepsInput(event.target.value);
  };

  const handleManualWorkoutSubmit = (event) => {
    event.preventDefault();
    setWorkoutListItems((currWorkoutListItems) => {
      return [
        ...currWorkoutListItems,
        { activity: addWorkoutActivityInput, reps: addWorkoutRepsInput },
      ];
    });
  };

  return (
    <span className="generator-grouping">
      <form onSubmit={handleManualWorkoutSubmit} className="generator-grouping">
        <label htmlFor="select-activity" className="input-label light-text">
          Activity
        </label>
        <select
          onChange={handleAddWorkoutActivityChange}
          id="select-activity"
          className="input-box"
        >
          <option value={""} disabled selected>
            Select
          </option>
          {activityBank.map((activity) => {
            return (
              <option value={activity.activity}>{activity.activity}</option>
            );
          })}
        </select>
        <label
          htmlFor="select-reps"
          className="input-label light-text"
          id="select-reps-label"
        >
          Reps:{" "}
        </label>
        <select
          onChange={handleAddWorkoutRepsChange}
          id="select-reps"
          className="input-box"
        >
          <option value={""} disabled selected>
            Select
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="light-text submit-button" id="add-activity-button">
          Add +
        </button>
      </form>
    </span>
  );
};

export default ManualWorkoutListItems;
