import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateBookmarkPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selects, setSelects] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Category"] = selects;
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Bookmark</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Title</label>
          <input
            required
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Url</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></input>
        </div>
        <div class="form-group">
          <label>Category</label>
          <select
            value={selects}
            onChange={(e) => setSelects(e.target.value)}
            class="form-control"
          >
            <option>JavaScript</option>
            <option>React</option>
            <option>Node</option>
            <option>Angular</option>
          </select>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={toggle}>
          Cancel
        </Button>
        <Button color="success" onClick={handleSave}>
          Save
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default CreateBookmarkPopup;
