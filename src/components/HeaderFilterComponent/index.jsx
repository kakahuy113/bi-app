import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import SelectComponent from 'components/Select';
import { useTranslation } from 'react-i18next';
import CHART_TYPE from 'constants/ChartType';

const HeaderFilterComponent = ({
  chartTitle,
  isSelection,
  viewMoreLink,
  isFilterButtons,
  currentSelection,
  onSelectionChange,
  selectionData,
  view,
  setView,
}) => {
  const { t } = useTranslation('common');
  return (
    <div className="d-flex justify-content-between mb-24">
      <div className="d-flex align-items-center">
        <h4 className="me-24 mb-0 text-blue-0">{chartTitle}</h4>
        {isSelection && (
          <SelectComponent
            value={currentSelection}
            options={selectionData}
            className={`fs-sm`}
            isBorder={true}
            onChange={(data) => {
              onSelectionChange(data);
            }}
            plColor={'#808495'}
          />
        )}
      </div>
      {viewMoreLink && (
        <a href={viewMoreLink} className="fs-14 text-body">
          <span className="pe-1 text-color">{t('txt_view_detail')}</span>
          <span
            className="icon arrow d-inline-block align-text-bottom ms-auto bg-success"
            style={{
              WebkitMaskImage: `url(/assets/images/arrow-right.svg)`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              width: '10px',
              height: '16px',
            }}
          ></span>
        </a>
      )}
      {isFilterButtons && (
        <ButtonGroup>
          <Button
            onClick={() => setView(CHART_TYPE.DAY)}
            className={`${
              view == CHART_TYPE.DAY && 'text-white active'
            } py-1 px-15 fs-12 lh-sm shadow-none bg-gray-900`}
            variant={view == 'days' ? 'dark' : 'outline-secondary'}
          >
            {t('txt_days')}
          </Button>

          <Button
            onClick={() => setView(CHART_TYPE.MONTH)}
            className={`${
              view == CHART_TYPE.MONTH && 'text-white'
            } py-1 px-15 fs-12 lh-sm shadow-none bg-gray-900`}
            variant={view == 'months' ? 'dark' : 'outline-secondary'}
          >
            {t('txt_months')}
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default HeaderFilterComponent;
