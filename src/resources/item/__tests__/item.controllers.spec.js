import controllers from '../item.controllers';
import { isFunction } from 'lodash';

describe('item controllers', () => {
  test('has crud controllers', () => {
    const crudMethod = [
      'getOne',
      'getMany',
      'createOne',
      'updateOne',
      'removeOne',
    ];

    crudMethod.forEach((name) =>
      expect(isFunction(controllers[name])).toBe(true)
    );
  });
});
