import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ButtonDelete = () => (
  <>
    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='window close' />
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        Del
      </Label>
    </Button>
  </>
)

export default ButtonDelete