/* eslint-disable react/prop-types */
import './Grid.css';
import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">

      {range(numRows).map((row) => (
        <div key={row} className="row">

          {range(numCols).map((col) => (
            <div key={col} className="cell"></div>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Grid;