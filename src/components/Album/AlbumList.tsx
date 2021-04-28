import React from 'react';
import { AlbumModel } from '../../models/AlbumModel';
import { PhotoModel } from '../../models/PhotoModel';
import Album from './Album';
import AlbumForm from './AlbumForm';
import { Card, Button, Icon } from 'semantic-ui-react';
import StatusBar from '../StatusBar/StatusBar';
import { WithLightbox, DeleteButton } from '../Common';

interface AlbumListProps {
    albums: AlbumModel[];
    photos: PhotoModel[];
    deleteAlbum: (index: string) => void;
    editAlbum: Function;
    createAlbum: Function;
}

const AlbumList = ({ albums, photos, deleteAlbum, editAlbum, createAlbum }: AlbumListProps) => {
    const getAlbumPhotos = (album: AlbumModel) => {
        return photos.filter(photo => album.photosIds.includes(photo.id));
    }

    const renderAlbums = () => {
        return (
            albums
                .map(album => {
                    const albumPhotos = getAlbumPhotos(album);

                    return (
                        <Album
                            key={album.id}
                            album={album}
                            albumPhotos={albumPhotos}
                        >
                            <Button icon>
                                <WithLightbox
                                    photos={albumPhotos}
                                >
                                    <Icon name='play' />
                                </WithLightbox>
                            </Button>
                            <AlbumForm
                                formType='Edit'
                                index={album.id}
                                albumProp={album}
                                photos={photos}
                                editAlbum={editAlbum}
                                createAlbum={createAlbum}
                            />
                            <DeleteButton
                                index={album.id}
                                objectName={album.name}
                                deleteObject={deleteAlbum}
                            />


                        </Album>
                    );
                })
        );
    }

    return(
        <div>
            <StatusBar title={`${albums.length} Album(s) total`}>
                <AlbumForm
                formType='New'
                photos={photos}
                createAlbum={createAlbum}
                editAlbum={editAlbum}
                index={''}
                />
            </StatusBar>
            <Card.Group itemsPerRow={4} doubling>
                {renderAlbums()}
            </Card.Group>
        </div>
    )
}

export default AlbumList;