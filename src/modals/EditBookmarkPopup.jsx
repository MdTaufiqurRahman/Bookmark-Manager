import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditBookmarkPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selects, setSelects] = useState();
  console.log(selects);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj?.Name);
    setDescription(taskObj?.Description);
    setSelects(taskObj?.Category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Category"] = selects;
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Bookmark</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Title</label>
          <input
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
        <Button color="success" onClick={handleUpdate}>
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditBookmarkPopup;
