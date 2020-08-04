/*TODO
 - add a quote for login??
*/

import React from 'react';

interface Props{};
interface State{};

class Greeting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    };

    render() {
        var hours = new Date().getHours();
        var greeting = "";
        var name = "Needs Name"; /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

        var quotes = [
            "‘Education is not the filling of a pot but the lighting of a fire.’ –W.B. Yeats",
            "‘I cannot teach anybody anything, I can only make them think.’ –Socrates",
            "‘A good teacher is like a candle – it consumes itself to light the way for others.’ –Mustafa Kemal Atatürk",
            "‘Teachers have three loves: love of learning, love of learners, and the love of bringing the first two loves together.’–Scott Hayden",
            "‘There is no failure. Only feedback.’–Robert Allen",
            "‘A good teacher is one who makes himself progressively unnecessary.’ –Thomas Carruthers"
        ];
        var quotenum = Math.floor(Math.random() * 5);
        var quote = quotes[quotenum];

        if(hours < 12) {
            greeting = "Good morning, "  + name + ".";
        }
        else if(hours>=12 && hours<5) {
            greeting = "Good afternoon, " + name + ".";
        }
        else {
            greeting = "Good evening, " + name + ".";
        }

        const allStyle = {
            backgroundColor: '#fff',
            width: '100%',
        };

        const contents = {
            margin: '3%'
        };

        return (
            <div style={allStyle}>
                <hr style={{borderColor: '#990000ff', borderWidth: '7px', margin: '0%'}}/>
                <div style={contents}>
                    <p style={{fontSize: '24px', marginBottom: '0'}}>{greeting}</p>
                    <br/>
                    <p style={{margin: '0', padding: '0', lineHeight: '20px'}}>{quote}</p>
                    <br/><br/>
                </div>
            </div>
        );
    }

};

export default Greeting;