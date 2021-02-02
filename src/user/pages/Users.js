import React,{useEffect,useState} from 'react';

import UserList from '../components/UserList';  
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUser, setLoadedUser] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users`);
                
                setLoadedUser(responseData.users);
                
            } catch (e) {
            
            }
            
        };
        fetchUser();
    }, [sendRequest]);
    
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && (
                <div className="center">
                    <LoadingSpinner asOverLay/>
                </div>
            )}
            {!isLoading && loadedUser && <UserList items={loadedUser}/>}
        </React.Fragment>
    );
};
export default Users;
  