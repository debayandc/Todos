import React from 'react'
import Filters from './Filters'
import { filters } from "../constants/filters"

const FilterList = ({ showSidebar }) => (
    <div id="filters" className="filters">
        <Filters showSidebar={showSidebar} filter={filters.SHOW_ALL}>All</Filters>
        <Filters showSidebar={showSidebar} filter={filters.SHOW_ACTIVE}>Active</Filters>
        <Filters showSidebar={showSidebar} filter={filters.SHOW_COMPLETED}>Completed</Filters>
    </div>
)

export default FilterList;