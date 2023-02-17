import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from 'react-icons/go';
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }){
    const [deleteAlbum, results] = useDeleteAlbumMutation();

    const handleClick = (album) => {
        deleteAlbum(album);
    };

    const header = (<>
        <Button onClick={ () => handleClick(album) } loading={ results.isLoading } className='mr-2'>
            <GoTrashcan />
        </Button>
        { album.title }
    </>);

    return (
        <ExpandablePanel key={ album.id } header={ header }>
            <PhotosList album={ album } />
        </ExpandablePanel>
    );
}

export default AlbumsListItem;