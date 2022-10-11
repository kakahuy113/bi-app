import GeoChart from 'components/GeoChart';
import SelectComponent from 'components/Select';
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
const ComponentContinent = (props) => {
  const data = [
    {
      country: 'Vietnam',
      country_code: 'VN',
      views: '698',
      flag: '/assets/images/flags/flag-vietnam.png',
    },
    {
      country: 'Thailand',
      country_code: 'TH',
      views: '200',
      flag: '/assets/images/flags/flag-thailand.png',
    },
    {
      country: 'Cambodia',
      country_code: 'KH',
      views: '100',
      flag: '/assets/images/flags/flag-cambodia.png',
    },
    {
      country: 'Malaysia',
      country_code: 'MY',
      views: '235',
      flag: '/assets/images/flags/flag-malaysia.png',
    },
    {
      country: 'Myanmar',
      country_code: 'MM',
      views: '333',
      flag: '/assets/images/flags/flag-myanmar.png',
    },
    {
      country: 'Singapore',
      country_code: 'SG',
      views: '555',
      flag: '/assets/images/flags/flag-singapore.png',
    },
    {
      country: 'Philippines',
      country_code: 'PH',
      views: '123',
      flag: '/assets/images/flags/flag-philippines.png',
    },
  ];
  const [continent, setContinent] = useState();
  const handleSelectMap = (data) => {
    if (data) {
      setContinent(data.value);
    }
  };
  useEffect(() => {
    setContinent('asia');
  }, []);
  const { t } = props;
  return (
    <div className="py-2 px-24 bg-white rounded-3 shadow-sm h-100">
      <div className="d-flex justify-content-between align-items-center py-16">
        <h2 className="mb-0 fs-4 fw-semibold">{t('txt_continent')}</h2>
        <div className="ms-16 me-auto">
          <SelectComponent
            defaultValue={{ label: 'Asia', value: 'asia' }}
            options={[
              { label: 'Asia', value: 'asia' },
              { label: 'Europe', value: 'europe' },
              { label: 'Africa', value: 'africa' },
              { label: 'North America', value: 'na' },
              { label: 'South America', value: 'sa' },
              { label: 'Oceania', value: 'oceania' },
            ]}
            className={`fs-sm`}
            isBorder={true}
            plColor={'#808495'}
            onChange={handleSelectMap}
          />
        </div>
        <a href="#" className="fs-14 text-body">
          <span className="pe-1">{t('txt_view_more')}</span>
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
      </div>
      <div className="fs-14">
        <div className="row gx-24 align-items-center">
          <div className="col-lg-7">
            <GeoChart data={data} continent={continent}></GeoChart>
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-between align-items-center py-16 border-bottom-1">
              <div className="fs-5 fw-bold">{t('txt_Country')}</div>
              <div className="fs-5 fw-bold">{t('txt_views')}</div>
            </div>
            {data.map((item, key) => {
              return (
                <div key={key} className="d-flex justify-content-between align-items-center py-16">
                  <div>
                    <img src={item.flag} className="pe-1"></img>
                    {item.country}
                  </div>
                  <div>{item.views}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default withTranslation('common')(ComponentContinent);
