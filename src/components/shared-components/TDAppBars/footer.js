import * as React from 'react';
import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material/';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'white', mt: 1, fontFamily: 'monospace' }}>
            {'Copyright © '}
            <Link sx={{ color: 'white' }} href="https://github.com/AbuBreak">
                Malik AbuBreak
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 0 },
                    py: { xs: 8, sm: 10 },
                    width: '100%',
                    padding: '10px',
                    textAlign: { sm: 'center', md: 'left' },
                    marginTop: '0',
                    bgcolor: '#47555E',
                    color: 'white',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 4, sm: 4 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'white',
                    }}
                >
                    <div>
                        <Link sx={{ color: 'white', fontFamily: 'monospace' }} variant="body2" href="/Home">
                            Privacy Policy
                        </Link>
                        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.7 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link sx={{ color: 'white', fontFamily: 'monospace' }} variant="body2" href="/Home">
                            Terms of Service
                        </Link>
                        <Copyright />
                    </div>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{
                            justifyContent: 'left',
                            color: 'white',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://github.com/OsamaSaleem95/training-react-housing-bank/tree/abubreak"
                            aria-label="GitHub"
                            sx={{
                                alignSelf: 'center',
                                color: 'white',
                                '&:hover': {
                                    color: '#C62300',
                                },
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://www.linkedin.com/in/malik-abubreak-90a94b180/"
                            aria-label="LinkedIn"
                            sx={{
                                alignSelf: 'center',
                                color: 'white',
                                '&:hover': {
                                    color: '#C62300',
                                },
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
}