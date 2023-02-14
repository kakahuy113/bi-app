/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import { notify } from 'components/Toast';
import PAGE_STATUS from 'constants/PageStatus';
import { makeAutoObservable } from 'mobx';
import moment from 'moment';
import BehaviorEventModel from '../BehaviorModel/BehaviorListEventModel';
class BehaviorEventsViewModel {
  behaviorStore = null;
  visitorStore = null;
  status = PAGE_STATUS.READY;
  dateFilter = {
    date_start: moment().startOf('month').format('YYYY-MM-DD'),
    date_end: moment().endOf('day').format('YYYY-MM-DD'),
  };
  data = null;
  constructor(behaviorStore, visitorStore) {
    makeAutoObservable(this);
    this.behaviorStore = behaviorStore;
    this.visitorStore = visitorStore;
  }

  transformDataToBehaviorEventModel = () => {
    return new BehaviorEventModel(this.data);
  };

  getVisitor = (dataFilter, dateFilter) => {
    this.status = PAGE_STATUS.LOADING;
    this.dataFilter = { ...this.dataFilter, ...dataFilter };
    this.dateFilter = { ...this.dateFilter, ...dateFilter };
    this.visitorStore.getVisitor(
      this.dataFilter,
      this.dateFilter,
      this.callbackOnDataSuccessHandler,
      this.callbackOnErrorHandler
    );
  };

  handleFilterDateRange = (startDate, endDate) => {
    this.status = PAGE_STATUS.LOADING;
    const dateRangeFilter = {
      date_start: moment(startDate).format('YYYY-MM-DD'),
      date_end: moment(endDate).endOf('day').format('YYYY-MM-DD'),
    };
    this.dateFilter = { ...this.dateFilter, ...dateRangeFilter };
    this.visitorStore.getVisitor(
      this.dataFilter,
      this.dateFilter,
      this.callbackOnDataSuccessHandler,
      this.callbackOnErrorHandler
    );
  };

  callbackOnErrorHandler = (error) => {
    this.status = PAGE_STATUS.READY;
    notify(error.message, 'error');
  };

  callbackOnDataSuccessHandler = (data) => {
    if (data) {
      this.status = PAGE_STATUS.READY;
      const transformData = new BehaviorEventModel(data);
      this.data = transformData;
    } else {
      this.status = PAGE_STATUS.ERROR;
      this.data = [];
    }
  };
}

export default BehaviorEventsViewModel;