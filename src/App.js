import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./App.css";

// import MusicalAdsApp from '../../AdsContainer/GourmetAdsApp'


class App extends Component {
    state = {
        layoutName: "default",
        input: "",
        videoGamesID: "amzn-assoc-ad-04c2b18d-a41c-4c85-b488-0ffa40b656a1",
    };

// nativeAds
    componentDidMount() {
        const script = document.createElement("script");
    
       script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=04c2b18d-a41c-4c85-b488-0ffa40b656a1";
       script.async = true;
    
       document.body.appendChild(script);
      }


    onChange = input => {
        this.setState({
            input: input
        });
        console.log("Input changed", input);
    };

    onKeyPress = button => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    handleShift = () => {
        let layoutName = this.state.layoutName;

        this.setState({
            layoutName: layoutName === "default" ? "shift" : "default"
        });
    };

    onChangeInput = event => {
        let input = event.target.value;
        this.setState(
            {
                input: input
            },
            () => {
                this.keyboard.setInput(input);
            }
        );
    };

    commonKeyboardOptions = {
        physicalKeyboardHighlight: true,
        newLineOnEnter: true,
    };

    render() {
        return (
            <div id="services" className="keyboard_body">
                {/* <MusicalAdsApp/> */}
                <div className="s-heading">
                    <h3>Magar Lama Keyboard</h3>
                    {/* <p></p> */}
                </div>
                {/* <h2><img src={Logo} style={{ height: 80, width: 80, color: '#0cc' }} alt="logo" /> Practice typing to get used-to with Magar Akkha-Rika Letters.</h2> */}
                <textarea className="keyboard_input" placeholder={"kEbOdAz tAep jAtnAz CAnlQ."} onChange={e => this.onChangeInput(e)} value={this.state.input} enterKeyHint={true}/>                
                <Keyboard
                    {...this.commonKeyboardOptions}
                    keyboardRef={r => (this.keyboard = r)}
                    onChange={input => this.onChange(input)}
                    onKeyPress={button => this.onKeyPress(button)}
                    theme={"hg-theme-default hg-layout-default myTheme1"}
                    layoutName={this.state.layoutName}

                    layout={{
                        default: [
                            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                            "{tab} q w e r t y u i o p [ ] \\",
                            "{lock} a s d f g h j k l ; ' {enter}",
                            "{shift} z x c v b n m , . / {shift}",
                            "mEJOr {space} V B ||B||"
                        ],
                        shift: [
                            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                            "{tab} Q W E R T Y U I O P { } |",
                            '{lock} A S D F G H J K L : " {enter}',
                            "{shift} Z X C V B N M < > ? {shift}",
                            "mEJOr {space} V B ||B||"
                        ]
                    }}
                    display={{
                        '{bksp}': 'backspace',
                        '{enter}': 'enter',
                        '{shift}': 'shift',
                        '{s}': 'shift',
                        '{tab}': 'tab',
                        '{lock}': 'caps',
                        '{accept}': 'Submit',
                        '{space}': "space",
                        '{//}': ' '
                    }}
                    buttonTheme={[
                        {
                            class: "hg-gray",
                            buttons: "{tab} {bksp} {lock} {enter} {shift} {space}"
                        },
                    ]}
                />
                {/* <h5 style={{ color: '#0cc' }}>Its a navigated part of Akkha Rika Lipi learning app.</h5> */}
                {/* <div id={this.state.videoGamesID}/> */}
            </div>
        );
    }
}
export default App;
