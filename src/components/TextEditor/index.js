import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    const boldClass = bold ? 'bold-active' : 'btns'
    const italicClass = italic ? 'italic-active' : 'btns'
    const underlineClass = underline ? 'underline-active' : 'btns'

    const textClass = bold && 'text-bold'
    const italicText = italic && 'text-italic'
    const underlineText = underline && 'text-underline'

    return (
      <div className="editor-bg">
        <div className="textEditor-container">
          <div className="img-container">
            <h1>Text Editor</h1>
            <img
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </div>
          <div className="textEditor">
            <ul className="btns-container">
              <li>
                <button
                  onClick={this.onClickBold}
                  className={boldClass}
                  type="button"
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </button>
              </li>

              <li>
                <button
                  onClick={this.onClickItalic}
                  className={italicClass}
                  type="button"
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </button>
              </li>

              <li>
                <button
                  onClick={this.onClickUnderline}
                  className={underlineClass}
                  type="button"
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </button>
              </li>
            </ul>

            <hr className="line" />
            <textarea
              className={`input ${textClass} ${italicText} ${underlineText}`}
              rows="20"
              cols="50"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
