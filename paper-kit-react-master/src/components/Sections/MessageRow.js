import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  FormGroup,
  Input,
  Modal,
  Row,
  Col
} from "reactstrap";

export default function MessageRow(props) {
  const [liveModal, setLiveModal] = useState(false);
  const [message, setMessage] = useState("");

  const sendText = function() {
    if (message) {
      axios.put(`/api/messages/${props.userid}/${props.message.sender}`, {
        message: message
      });
      setLiveModal(false);
      props.clearMessage();
    }
  };

  return (
    <div>
      <Modal isOpen={liveModal} toggle={() => setLiveModal(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Send Message
          </h5>
        </div>
        <div className="modal-body">
          <FormGroup row>
            <Input
              type="text"
              min="0"
              step="1"
              name="text"
              id="formText"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
            />
          </FormGroup>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setLiveModal(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => sendText()}
            >
              Send
            </Button>
          </div>
        </div>
      </Modal>

      <Row>
        <Col>
          <p>{props.users[props.message.sender]}</p>
        </Col>
        <Col className="ml-auto mr-auto">
          <p>{props.message.message}</p>
        </Col>

        <Col className="messageReply">
          <p>{props.message.time.slice(0, 10)}</p>
          <Button
            className="btn-round"
            color="success"
            outline
            onClick={() => setLiveModal(true)}
          >
            Reply
          </Button>
        </Col>
      </Row>
    </div>
  );
}

// setCurrentMessages([...currentMessages, {sender:sender.user_id, message:sender.message, time:sender.timestamp}])
