import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }){
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

    const handleClick = (user) => {
        doDeleteUser(user);
    };

    const header = <>
        <Button className='mr-3' loading={ isLoading } onClick={ () => handleClick(user) }>
            <GoTrashcan />
        </Button>
        { error && <div>Error deleting user...</div> }
        { user.name }
    </>;

    return (
        <ExpandablePanel header={ header }>
            <AlbumsList user={ user } />
        </ExpandablePanel>
                    
    );
}

export default UsersListItem;