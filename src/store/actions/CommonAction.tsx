import { CommonData } from "../../type/store/CommonStore";
import { CommonAction, CommonActionType } from "../reducers/CommonReducer";

const setCurrentPath = (
  dispatch: React.Dispatch<CommonActionType>,
  data: CommonData
) => {
  dispatch({
    type: CommonAction.UPDATE_DATA,
    data: { ...data },
  });
};

export { setCurrentPath };
