import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const Container = styled('div')(({ theme }) => ({
    padding: '25px',
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '30px',
}));

const SelectEmpty = styled(Select)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const Loading = styled('div')({
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ListContainer = styled(Grid)({
    height: '75vh',
    overflow: 'auto',
    spacing: 3,
});

const List = ({ places = [], type, setType, rating, setRating, childClicked, isLoading }) => {
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    return (
        <Container>
            <Typography variant="h4">Food & Dining around you</Typography>
            {isLoading ? (
                <Loading>
                    <CircularProgress size="5rem" />
                </Loading>
            ) : (
                <>
                    <FormControlStyled>
                        <InputLabel id="type">Type</InputLabel>
                        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControlStyled>
                    <FormControlStyled>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControlStyled>
                    <ListContainer container>
                        {places?.map((place, i) => (
                            <Grid ref={elRefs[i]} key={i} item xs={12}>
                                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                            </Grid>
                        ))}
                    </ListContainer>
                </>
            )}
        </Container>
    );
};

export default List;
