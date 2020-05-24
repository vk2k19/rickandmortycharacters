import actions from "../../../src/redux/action";
import TYPES from "../../../src/redux/action/types";

describe("App actions", () => {
  test(`Update search query`, () => {
    const expectedAction = {
      type: TYPES.UPDATE_SEARCH_NAME,
      payload: 'name'
    };

    const resultedAction = actions.updateSearchString(expectedAction.payload);
    expect(resultedAction).toStrictEqual(expectedAction);
  });

  test(`update filter`, () => {
    const payload = "1";
    const expectedAction = {
      type: TYPES.UPDATE_FILTERS,
      payload
    };

    const resultedAction = actions.updateFilters(payload);
    expect(resultedAction).toStrictEqual(expectedAction);
  });

  test(`update SORT`, () => {
    const payload = "2";
    const expectedAction = {
      type: TYPES.UPDATE_SORT,
      payload
    };

    const resultedAction = actions.updateSorting(payload);
    expect(resultedAction).toStrictEqual(expectedAction);
  });

  test(`get results with fetch error from first request`, done => {
    const dispatch = jest.fn();
    const payload = {
      error: 'api down'
    };
    const expectedAction1 = {
      type: TYPES.UPDATE_RESULTS_ERROR
    };
    fetch.once(JSON.stringify(payload));
    const resultedAction = actions.getCharacters();
    resultedAction(dispatch);
    setTimeout(() => {
      expect(resultedAction.constructor).toBe(Function);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch.mock.calls[0]).toMatchObject([expectedAction1]);
      done();
    }, 100);
  });

  test(`get results with fetch error`, done => {
    const dispatch = jest.fn();
    const payload = {
      info: { count: 1 }
    };
    const expectedAction1 = {
      type: TYPES.UPDATE_RESULTS_ERROR
    };
    fetch.once(JSON.stringify(payload));
    fetch.once(JSON.stringify({ error: 'no results found' }));
    const resultedAction = actions.getCharacters();
    resultedAction(dispatch);
    setTimeout(() => {
      expect(resultedAction.constructor).toBe(Function);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch.mock.calls[0]).toMatchObject([expectedAction1]);
      done();
    }, 100);
  });

  test(`get results with array response success`, done => {
    const dispatch = jest.fn();
    const payload = {
      info: { count: 1 }
    };
    const expectedAction1 = {
      type: TYPES.UPDATE_RESULTS_SUCCESS
    };
    fetch.once(JSON.stringify(payload));
    fetch.once(JSON.stringify([{ origin: { name: 'test'}, location: { name: 'test' }}]))
    const resultedAction = actions.getCharacters();
    resultedAction(dispatch);
    setTimeout(() => {
      expect(resultedAction.constructor).toBe(Function);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch.mock.calls[0]).toMatchObject([expectedAction1]);
      done();
    }, 100);
  });

  test(`get results with single object success`, done => {
    const dispatch = jest.fn();
    const payload = {
      info: { count: 1 }
    };
    const expectedAction1 = {
      type: TYPES.UPDATE_RESULTS_SUCCESS
    };
    fetch.once(JSON.stringify(payload));
    fetch.once(JSON.stringify({ origin: { name: 'test'}, location: { name: 'test' }}))
    const resultedAction = actions.getCharacters();
    resultedAction(dispatch);
    setTimeout(() => {
      expect(resultedAction.constructor).toBe(Function);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch.mock.calls[0]).toMatchObject([expectedAction1]);
      done();
    }, 100);
  });
});
