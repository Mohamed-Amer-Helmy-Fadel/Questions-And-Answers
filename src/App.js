import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./component/FonrtInput";
import QAlist from "./component/QAlist";
import { question } from "../src/data";
function App() {
  const [data, setData] = useState(question);

   const additem = () => {
    localStorage.setItem("question",JSON.stringify([...question]));

      setData([...question]);
    }

    const deleteAll = () => {
      question.splice(0, question.length);
      setData([]);
    }
    // for deleting only one item or selected item
    const deleteItem = (index) => {
      question.splice(index, 1);
      setData([...question]);
    }

// this one is for rerendering the page after adding new item
  return (
    <div className="font text-center ">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          {/* ****************************************************************************************** */}
          <Col sm="8">
            <FormInput onAdd={additem}/>

            <QAlist data={data} deleteItem={deleteItem} />

            {
              data.length >= 1 ? (
                <button onClick={deleteAll} className="btn-color w-100  my-2">مسح الكل</button>
              ) : null
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
