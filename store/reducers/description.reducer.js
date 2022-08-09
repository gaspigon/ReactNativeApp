import { DESCRIPTION } from "../../data/Description";
//action
import { SELECT_DESCRIPTION, FILTERED_DESCRIPTION } from "../actions/description.action";

const initialState = {
    description: DESCRIPTION,
    selected: null,
    filteredDescription: []
}

const DescriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DESCRIPTION:
            return {
                ...state,
                selected: state.description.find(description => description.id === action.descriptionID)
            }
        case FILTERED_DESCRIPTION:
            return {
                ...state,
                filteredDescription: state.description.filter(description => description.categoryID === action.categoryID)


            }
        default:
            return state;
    }
}

export default DescriptionReducer;