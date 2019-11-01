import React from 'react'
import Filters from './Filters'
import { filters } from "../constants/filters"

const FilterList = () => (
    <div className="filters">
        <Filters filter={filters.SHOW_ALL}>All</Filters>
        <Filters filter={filters.SHOW_ACTIVE}>Active</Filters>
        <Filters filter={filters.SHOW_COMPLETED}>Completed</Filters>
    </div>
)

export default FilterList;