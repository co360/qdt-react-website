import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar',
    title: 'MY SELECTIONS',
    btnText: 'Clear Selections',
  },
};
const viz2 = {
  type: 'QdtViz',
  props: {
    type: 'QdtViz', id: 'ycppXj', height: '300px',
  },
};

const disCode = {
  template: '<QdtComponent type={viz1.type} props={viz1.props} />',
  code: `const viz1 = {
    type: 'QdtSelectionToolbar',
    props: {
        type: 'QdtSelectionToolbar', 
        title: 'MY SELECTIONS',
        btnText: 'Clear Selections',
    },
};`,
};

const SelectionToolbar = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Selection Toolbar</h2>

    <div className="row">
      <div className="col-md-12 text-left object">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-6">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h5>Define the props in your code</h5>
        <Highlight language="javascript">
          {disCode.code}
        </Highlight>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h5>Render in your Template</h5>
        <Highlight language="html">
          {disCode.template}
        </Highlight>
      </div>
    </div>
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default SelectionToolbar;
