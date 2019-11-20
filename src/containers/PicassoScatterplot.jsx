import React from 'react';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'scatterplot',
    // cols: ['Case Owner', '=Avg([Case Duration Time])',
    // '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'],
    cols: ['Case Owner', { qDef: { qDef: '=Avg([Case Duration Time])', qLabel: 'Avg Case Duration Time' } }, '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'],
    options: { noTooltip: true },
    outerHeight: 300,
  },
};

const Scotterplot = () => (
  <div className="singlepage">
    <a className="link" href="../">🢐 back to gallery</a>
    <h2>Scatterplot made with Picasso</h2>

    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
    <a className="link" href="../">🢐 back to gallery</a>

  </div>
);

export default Scotterplot;
