import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import QueryPage from '../pages/QueryPage.jsx'
import QueriesPage from '../pages/QueriesPage.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<MainPage />} />

                <Route path='query' element={<DashboardPage />}>
                    <Route index element={<QueryPage />} />
                </Route>

                <Route path='queries' element={<DashboardPage />}>
                    <Route index element={<QueriesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;