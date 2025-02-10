import { Box, List, Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function FolderList({folders}) {
    const { folderId } = useParams();
    const [activeFolderId, setActiveFolderId] = useState(folderId);

    return (
        <List sx={{
            width: '100%', 
            bgcolor: '#7D9D9C',
            height: '100%',
            padding: '10px',
            textAlign: 'left',
            overflowY: 'auto'
            }}
            subheader={
                <Box>
                    <Typography sx={{fontWeight:'bold',color:'white'}}>Folders</Typography>
                </Box>
            }
            >
                {
                    folders.map(({id, name}) => {
                        return (
                            <Link key={id} to={`folders/${id}`}
                            style={{ textDecoration: 'none' }}
                            onClick={() => setActiveFolderId(id)}
                            >
                                <Card sx={{mb:'5px',backgroundColor: activeFolderId === id ? 'rgb(255 211 140)' : null}}>
                                    <CardContent sx={{ '&.last-child': {pb:'10px'}, padding: '10px'}}>
                                        <Typography sx={{ fontSize:16,fontWeight:'bold'}}>{name}</Typography>
                                    </CardContent>    
                                </Card>    
                            </Link>
                        )
                    })
                }
        </List>
    )
}
