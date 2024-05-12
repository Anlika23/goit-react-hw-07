
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filter.name); 

    const handleSearch = (searchValue) => {
        dispatch(changeFilter(searchValue));
    };

    return (
        <div className={css.containerSearch}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.searchInput}
                type="text"
                placeholder="Search..."
                value={filterValue} 
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}

