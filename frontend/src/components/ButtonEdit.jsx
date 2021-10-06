import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ButtonEdit = () => (
  <>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='keyboard' />
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        Edit
      </Label>
    </Button>
  </>
)

export default ButtonEdit