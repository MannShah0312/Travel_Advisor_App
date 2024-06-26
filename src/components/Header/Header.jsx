import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';


const Title = styled(Typography)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '20ch',
    },
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));


const Header = ({ onPlaceChanged, onLoad }) => {
    return (
        <AppBar position="static">
            <CustomToolbar>
                <Title variant="h5">
                    Travel Advisor
                </Title>
                <Box display="flex">
                    <Title variant="h6">
                        Explore new places
                    </Title>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" />
                        </Search>
                    </Autocomplete>
                </Box>
            </CustomToolbar>
        </AppBar>
    );
};

export default Header;
