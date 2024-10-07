import React, { useState } from "react";
import {  Col, Form, Row } from "react-bootstrap";
import { question } from './../data';
 const FonrtInput = ({onAdd}) => {
    const [quest, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    const addNewItem = () => {
  
        question.push({ id: Math.random(), question: quest, answer: answer } );

        setQuestion('');
        setAnswer('');
        onAdd();
        console.log(question);
    }

    // const addNewItem = () => {
    //     const newItem = {
    //         id: question.length + 1,
    //         question: quest,
    //         answer: answer,
    //     }
    //     question.push(newItem);
    //     onAdd();
    //     setQuestion('');
    //     setAnswer('');
    // }

  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control value={quest} onChange={(e)=> setQuestion(e.target.value)} type="text" placeholder="ادخل السؤال" />
      </Col>
      <Col sm="5">
      <Form.Control value={answer}  onChange={(e)=> setAnswer(e.target.value)} type="text" placeholder="الاجابه" />
        </Col>
        <Col sm="2">
      <button onClick={addNewItem} className="btn-color w-100" type="text">
        اضافة
      </button>
        </Col>
    </Row>
  );
};
export default FonrtInput;
