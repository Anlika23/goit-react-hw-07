import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader({ isLoading }) {
    return (
        <div className={css.loaderContainer}>
            {isLoading && (
                <InfinitySpin
                    visible={true}
                    width="200"
                    color="#efef08f8"
                    ariaLabel="infinity-spin-loading"
                    
                />
            )}
        </div>
    );
}