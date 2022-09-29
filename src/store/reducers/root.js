import { combineReducers } from "redux";

import { RegisterUser } from "./User";
import { FormDetail } from "./FormDetail";
export const rootReducer = combineReducers({
    RegisterUser,
    FormDetail,
});
