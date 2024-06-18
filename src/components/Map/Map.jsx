import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

import mapStyles from '../../mapStyles';

const MapContainer = styled('div')({
    height: '85vh',
    width: '100%',
});

const MarkerContainer = styled('div')({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
});

const CustomPaper = styled(Paper)({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
});

const Pointer = styled('img')({
    cursor: 'pointer',
});


const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place, i) => (
                    <MarkerContainer
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!matches
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                                <CustomPaper elevation={3}>
                                    <Typography variant="subtitle2" gutterBottom> {place.name}</Typography>
                                    <Pointer
                                        src={place.photo ? place.photo.images.large.url : 'https://media.licdn.com/dms/image/C5612AQGLqfIkA4M-6w/article-cover_image-shrink_720_1280/0/1614600454605?e=2147483647&v=beta&t=ayiICkZ3c6sIgAqiclsnYpPzzRXTg_-MuGKYCHiXUgI'}
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </CustomPaper>
                            )}
                    </MarkerContainer>
                ))}
                {weatherData?.list?.length && weatherData.list.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
                    </div>
                ))}
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;
