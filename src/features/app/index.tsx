import { PrimeReactProvider } from 'primereact/api';
import '../../theme/html5up-arcana/index';
import { Main } from '../../layouts/Main';

export const App = () => {
    return (
        <PrimeReactProvider>
            <Main />
        </PrimeReactProvider>
    );
}