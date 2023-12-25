import {Component} from 'react'

import {
  Heading,
  Form,
  Label,
  Input,
  Button,
  MainContainer,
  Container,
  Paragraph,
  Select,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageViewList: [],
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    const newImageView = {
      newImageUrl: imageUrl,
      newFontSize: parseInt(fontSize),
      newTopText: topText,
      newBottomText: bottomText,
    }
    this.setState({
      imageViewList: newImageView,
    })
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, imageViewList} = this.state
    const {newImageUrl, newBottomText, newFontSize, newTopText} = imageViewList
    return (
      <MainContainer>
        <Form onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="imageUrl">Image URL</Label>
          <br />
          <Input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
          />
          <br />
          <Label htmlFor="topText">Top Text</Label>
          <br />
          <Input
            id="topText"
            type="text"
            value={topText}
            onChange={this.onChangeTopText}
          />
          <br />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <br />
          <Input
            id="bottomText"
            type="text"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />
          <br />
          <Label htmlFor="fontSize">Font Size</Label>
          <br />

          <Select
            id="fontSize"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </Select>

          <br />
          <Button type="submit">Generate</Button>
        </Form>
        <Container currentImage={newImageUrl} data-testid="meme">
          <Paragraph numbers={newFontSize}>{newTopText}</Paragraph>
          <Paragraph numbers={newFontSize} marginUpper>
            {newBottomText}
          </Paragraph>
        </Container>
      </MainContainer>
    )
  }
}
export default MemeGenerator
