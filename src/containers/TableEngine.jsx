import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};

const viz2 = {
  type: 'QdtTable',
  props: {
    cols: [
      {
        qDef: {
          qLabel: 'Year',
          qFieldDefs: ['Year'],
        },
      },
      {
        qDef: {
          qLabel: 'Champion',
          qFieldDefs: ['Champion_Full'],
          qSortCriterias: [{ qSortByAscii: 1 }],
        },
      },
      {
        qDef: {
          qLabel: 'Runner Up',
          qFieldDefs: ['Runner-Up_Full'],
          qSortCriterias: [{ qSortByAscii: 1 }],
        },
      },
      {
        qDef: {
          qLabel: "Champion's Payroll",
          qDef: '=Sum(if(Club = [Champion], [Total Compensation]))',
          qNumFormat: { qType: 'M', qFmt: '$#,##0', qThou: ',' },
        },
        qSortBy: { qSortByNumeric: -1 },
      },
      {
        qDef: {
          qLabel: 'Runner-up Payroll',
          qDef: '=Sum(if(Club = [Runner-up], [Total Compensation]))',
          qNumFormat: { qType: 'M', qFmt: '$#,##0', qThou: ',' },
        },
        qSortBy: { qSortByNumeric: -1 },
      },
      {
        qDef: {
          qLabel: 'Chamption Payroll Difference vs. Runner-up',
          qDef: '=Sum(if(Club = Champion, [Total Compensation]))-Sum(if(Club = [Runner-up], [Total Compensation]))',
          qNumFormat: { qType: 'M', qFmt: '$#,##0', qThou: ',' },
        },
        qSortBy: { qSortByNumeric: -1 },
      },
    ],
    height: 400,
    rowHeight: 40,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `
    const viz2 = {
      type: 'QdtTable',
      props: {
        cols: [
          {
            qDef: {
              qLabel: 'Year',
              qFieldDefs: ['Year'],
            },
          },
          {
            qDef: {
              qLabel: 'Champion',
              qFieldDefs: ['Champion_Full'],
              qSortCriterias: [{ qSortByAscii: 1 }],
            },
          },
          {
            qDef: {
              qLabel: 'Runner Up',
              qFieldDefs: ['Runner-Up_Full'],
              qSortCriterias: [{ qSortByAscii: 1 }],
            },
          },
          {
            qDef: {
              qLabel: "Champion's Payroll",
              qDef: '=Sum(if(Club = [Champion], [Total Compensation]))',
              qNumFormat: { qType: 'M', qFmt: '$#,##0', qThou: ',' },
            },
            qSortBy: { qSortByNumeric: -1 },
          },
          {
            qDef: {
              qLabel: 'Runner-up Payroll',
              qDef: '=Sum(if(Club = [Runner-up], [Total Compensation]))',
              qNumFormat: { qType: 'M', qFmt: '$#,##0', qThou: ',' },
            },
            qSortBy: { qSortByNumeric: -1 },
          },
          {
            qDef: {
              qLabel: 'Chamption Payroll Difference vs. Runner-up',
              qDef: '=Sum(if(Club = Champion, [Total Compensation]))-Sum(if(Club = [Runner-up], [Total Compensation]))',
              qNumFormat: { qType: 'M', qFmt: '$#,##0', qThou: ',' },
            },
            qSortBy: { qSortByNumeric: -1 },
          },
        ],
        height: 400,
        rowHeight: 40,
      },
    };`,
};

const Table = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Table (Engine API)</h2>


    <div className="row pb50">
      <div className="col-md-12 object">
        <QdtComponent type={viz2.type} props={viz2.props} app4 />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} app4 />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Define the props in your code</h4>
        <Highlight language="javascript">
          {disCode.code}
        </Highlight>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Render in your Template</h4>
        <Highlight language="html">
          {disCode.template}
        </Highlight>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Ref:</h4>
        <a href="https://help.qlik.com/en-US/sense-developer/April2018/Subsystems/APIs/Content/CapabilityAPIs/VisualizationAPI/table-properties.htm">https://help.qlik.com/en-US/sense-developer/April2018/Subsystems/APIs/Content/CapabilityAPIs/VisualizationAPI/table-properties.htm</a>
      </div>
    </div>
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default Table;
