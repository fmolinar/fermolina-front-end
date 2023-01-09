import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


function ModalLogIn() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button color='teal'>Admin</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='sign-in' content='Admin Login' />
      <Modal.Content>
        <p>
            This page is meant for admin login only.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalLogIn