import {sortTo, convertArrayToMap, capitalize} from './utils'

import {Order} from '../const';

describe('utils tests', () => {
  it('sortTo should work right', () => {
    const data = [{id: 5}, {id: 1}, {id: 10}, {id: 9},];
    const sortedAsc = [{id: 1}, {id: 5}, {id: 9}, {id: 10},];
    const sortedDesc = [{id: 10}, {id: 9}, {id: 5}, {id: 1},];

    expect(sortTo(data, 'id', Order.Asc)).toEqual(sortedAsc);
    expect(sortTo(data, 'id', Order.Desc)).toEqual(sortedDesc);
  });

  it('convertArrayToMap should work right', () => {
    const data = [{id: 5}, {id: 1}, {id: 10}, {id: 9},];
    const ret = {1: {id: 1}, 5: {id: 5}, 10: {id: 10}, 9: {id: 9}};

    expect(convertArrayToMap(data, 'id')).toEqual(ret);
  });

  it('capitalize should work right', () => {
    const data = 'sameString';
    const ret = 'Samestring';

    expect(capitalize(data)).toEqual(ret);
  });
});
