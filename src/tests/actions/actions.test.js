import * as actions from '../../actions/index'
import ActionTypes from '../../actions/action-types';

describe('createItem', () => {
  it("should create an action to create a new item", () => {
    const info = {
      title: "test",
      questionTitle: "test question title",
    }
    const edfId = "adfj2dj"
    const itemId = edfId + "-" + "test";
    const expectedAction = {
      type: ActionTypes.CREATE_ITEM,
      edfId: edfId,
      id: expect.stringContaining(edfId),
      ...info
    }
    expect(actions.createItem(edfId, info)).toEqual(expectedAction)
  })
})
