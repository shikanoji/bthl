import React from 'react';
import Unit from './Unit';
import { Row, Col} from 'react-bootstrap';
import { getHexagramName} from '../../helpers/HexagramHelper.js'

export default function Hexagram(props) {
    return (
      <div width="200px" className="hexagram">
        <Row>
          <Col xs="3" sm="4">
            <Row className="h-100">
              <div height="100%" className="center align-self-center">
                <h3 width="100%" className="hexagram-name align-self-center" align="center">
                  {getHexagramName(props.values)}
                </h3>
              </div>
            </Row>
          </Col>
          <Col xs="9" sm="8">
            {props.values.map((value, index) => {
              return <Unit value={value} key={index} />;
            })}
          </Col>
        </Row>
      </div>
    );
}