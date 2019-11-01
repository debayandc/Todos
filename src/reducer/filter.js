import { filters } from "../constants/filters";

const filter = (state = filters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'FILTER_TYPE':
            return action.filter
        default:
            return state
    }
}

export default filter;