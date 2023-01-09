import React from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';

const Media = () => {
    return (
        <Container fluid>
            <Button color='linkedin' href="https://linkedin.com/in/fernando-molina-rodriguez">
                <Icon name='linkedin'  /> LinkedIn
            </Button>
            <Button color='github' href="https://github.com/fmr999">
                <Icon name='github' /> Github
            </Button>
            <Button color='red' mailto="mailto:fer.molina.rdz@gmail.com">
                <Icon name='google' /> Gmail
            </Button>
        </Container>
    )
}

export default Media;