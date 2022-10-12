import Table from 'components/Table';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
const Revenue = (props) => {
  const columnsTable = React.useMemo(
    () => [
      {
        Header: 'TYPE',
        accessor: 'type',
        className: 'px-24 py-2 fs-12 opacity-50 border-bottom-1 ',
        Cell: ({ value }) => {
          return <div className="px-24">{value}</div>;
        },
      },
      {
        Header: 'PERCENTAGE (%)',
        accessor: 'percentage',
        className: 'py-2 fs-12 opacity-50 border-bottom-1 ',
        Cell: ({ value }) => {
          return (
            <div className="d-flex align-items-center">
              <ProgressBar className="w-100" variant="primary" now={value} />
              <span
                className={`${value > 50 ? 'text-success' : 'text-danger'} ms-1 fs-14 fw-semibold`}
              >
                {value}%
              </span>
            </div>
          );
        },
      },
      {
        Header: 'VALUE',
        accessor: 'value',
        className: 'px-24 py-2 fs-12 opacity-50 border-bottom-1 text-end',
        Cell: ({ value }) => {
          return <div className="text-end px-24">{value}</div>;
        },
      },
    ],
    []
  );
  const dataTable = React.useMemo(
    () => [
      { type: 'Starter', percentage: '66', value: '$5.240,85' },
      { type: 'Team', percentage: '15.6', value: '$2.524' },
      { type: 'Growth', percentage: '68', value: '$7.865,90' },
      { type: 'Enterprise', percentage: '98.5', value: '$12.240,85' },
    ],
    []
  );
  const { t } = props;
  return (
    <div className="py-2 bg-white rounded-3 shadow-sm h-100">
      <h2 className="py-16 px-24 mb-0 fs-4 fw-semibold text-blue-0">
        {t('txt_revenue_by_subscribers')}
      </h2>
      <div className="fs-14 fw-semibold">
        <Table columns={columnsTable} data={dataTable}></Table>
      </div>
    </div>
  );
};
export default withTranslation('common')(Revenue);