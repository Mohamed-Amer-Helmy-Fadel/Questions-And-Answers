import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from './../data';

export const QAlist = ({ data, deleteItem }) => {


  const ondeletItem = (ID) => {
    if ( data.length >= 1) {
      const index = question.findIndex((item) => item.id === ID);
      // question.slice(index, 1);
      question.splice(index, 0);
      deleteItem(question);
    }
  }
  return (
    <Row>
      <Accordion>
        {data.length >= 1 ? (
          data.map((item, index) => {
            return (
              <Accordion.Item key={item.id} eventKey={item.id}>
                <Accordion.Header>
                  <div className="px-3">{item.question}</div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="d-inline px-3">{item.answer}</div>
                  <button  onClick={() => ondeletItem(item.id)} className="btn btn-danger">حذف</button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5">لا يوجد اسئله</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAlist;
