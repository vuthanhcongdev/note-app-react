import React, { useState } from 'react';
import { Card, CardContent, Grid, List, Box, Typography } from '@mui/material';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function NoteList() {
    const {noteId} = useParams();
    const [activeNoteId, setActiveNoteId] = useState(noteId);

    const folder = { notes: [{id:1, content: '<p>this is new note</p>'}] };
    return (
        <Grid container height='100%'>
            <Grid item xs={4} sx={{width: '100%', maxWidth: 360, bgcolor: '#F0EBE3', 
                height: '100%', padding: '10px', textAlign: 'left', overflowY: 'auto'}}>
                <List
                    subheader={
                        <Box>
                            <Typography sx={{fontWeight:'bold'}}>Notes</Typography>
                        </Box>
                    }>
                    {
                        folder.notes.map(({id, content}) => {
                            return <Link
                                key={id}
                                to={`note/${id}`}
                                style={{ textDecoration: 'none' }}
                                onClick={() => setActiveNoteId(id)}>
                                    <Card sx={{mb:'5px',backgroundColor: activeNoteId === id ? 'rgb(255 211 140)' : null}}>
                                        <CardContent sx={{ '&.last-child': {pb:'10px'}, padding: '10px'}}>
                                            <div style={{fontSize:14, fontWeight:'bold'}}
                                                dangerouslySetInnerHTML={{
                                                    __html: `${content.substring(0, 30)}` || 'Empty'}}>
                                            </div>
                                        </CardContent>
                                    </Card>
                            </Link>
                        })
                    }
                </List>
            </Grid>
            <Grid item xs={8}>
                <Outlet />
            </Grid>
        </Grid>
  )
}
