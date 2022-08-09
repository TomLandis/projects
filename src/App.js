import logo from './logo.svg';
import './App.css';
import { InitalDetails } from './detailText';
import { CodePenEmbed } from './codepenembed';
import { FullCPembed } from './FullCodePenEmbed';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    let init =  [{text: "To find out details of how I leveraged technologies like JavaScript, PHP, WordPress, NodeJS, mogoDB, bash scripting, PowerShell and more, click on the coresponding technology logos in my project descriptions."}];
    this.state = {
      title: "Thanks so much for your interest in my work!",
      info: init
      
    };
  }
  updateDetails(name){
const phpInFRS = {
  title: "PHP in Fancy Roller Scroller",
  info: [{
    text:'I am still a beginer at PHP development. I learned several valuable lessons while developing this app. The PHP component in this WordPress plugin simply handles the install of the plugin. It writes the list to the database when it changes and fetches it when the short code for the plugin appears on a page or post. It handles serving the list and other assets to the front end. I was thrilled to learn with a few days of study and reading I could learn enough PHP to scrape this together.'}]
}
const jsInFRS = {
  title: "JavaScript in Fancy Roller Scroller",
  info:[{
    tag: 'p',
    text: 'In this project I used client side JavaScript in two places. Firstly, on the rolling list animation itself. The list items are cycled and faded in and out. If implementation details of this type of animated text is interesting you you you can checkout my early prototyping of this part of the app on CodePen.io.',
    hasClass: false},{tag: 'a',
    text: 'FRS - Prototype',
    linko: 'https://codepen.io/Tlandis/pen/qLVQxo'}, 
    {
      tag: 'p',
      text: 'The second part of the project that required client-side JavaScript was the admin dashboard where the site owner can edit the list. Inside the WordPress admin dashboard, this component fetches the scrolling list and alows the user to modify list items and save them. The updated list can then be saved and appear on the end-user facing site.'}]
}

    console.log(name)
    if(name === 'jsInFRS'){
this.setState({
  title:jsInFRS.title,
  info: jsInFRS.info
})
    }else if(name === 'phpInFRS'){
      this.setState({
        title:phpInFRS.title,
        info: phpInFRS.info
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div id="details">
        <h2> {this.state.title} </h2>

          {
 this.state.info.map((n) => n.tag === 'a' ? <FullCPembed linko={n.linko} text={n.text} /> : <InitalDetails title={n.title} info={n.text} />)
          }
 
 
        </div>
        <div id="projects">
        <div className="projectHolder">
    <h2 className="ptitle">Fancy Roller Scroller</h2>
    <div className="twocol">
      <img src="https://cdn6.f-cdn.com/files/download/75805099/FRS.gif" />
      <p>I made this plugin because one of my freelance clients requested a rolling list of products on their WordPress site. After completing the project, I contribued my plugin to the WordPress plugin repository. It passed a rigorus evaluation that all plugins submited to this opens source repository face. The plugin has been <strong>downloaded almost 700 times</strong> and is compatible with the current version of WordPress. </p>
    </div>
    <div className="badgeHolder">
      <div className="badgeOfHonor js" id="js" onClick={(e)=>{this.updateDetails("jsInFRS")}}><img alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" /></div>
      <div className="badgeOfHonor php" onClick={(e)=>{this.updateDetails("phpInFRS")}}><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" /></div>
      <div className="badgeOfHonor wp"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" />
      </div>
  
    </div>
  </div>
  <div className="projectHolder">
    <h2 className="ptitle">Testing Better</h2>
    <div className="twocol">
      <img src="https://res.cloudinary.com/testingbetter/image/upload/v1658908994/dfk7oi7o5pprfy7k6rep.png" />
      <p>I made this app because I wanted teachers to have an easy way to quickly assess their students progress. In seconds a teacher can make a test that they can deploy to students and the test is automatically graded with a key made during test creation. Teachers can add true / false questions, multiple choice, and pictures. They can quickly analyse which parts of their lessons were effective and see which questions had the highest number of incorrect answers by their students.</p>
    </div>
    <div className="badgeHolder">
      <div className="badgeOfHonor js" data-tec="js"><img alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" /></div>
      <div className="badgeOfHonor node" data-tec="node"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" /></div>
      <div className="badgeOfHonor mongo" data-tec="mongo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" />
      </div>
  
    </div>
  </div>
  
  <div className="projectHolder">
    <h2 className="ptitle">Loan Mac Rollback</h2>
    <div className="twocol">
      <img src="https://res.cloudinary.com/testingbetter/image/upload/v1658970135/isssgubcnxuq7dytlsuk.jpg" />
      <p>Our IT department loans out MacBookPros for use on business trips, confrences and such. To format the devices between users and was a manual task that took a help-desk member 10 to 15 minutes to complete. I wrote this automation to restores loan devices to a previous state erasing all personal information. I documented the process of creating new images to restore from so the process can continue to be used. </p>
    </div>
    <div className="badgeHolder">
      <div className="badgeOfHonor bash"><img alt="Unofficial bash logo 2" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" /></div>
    </div>
  
  </div>
  
  <div className="projectHolder">
    <h2 className="ptitle">Express PowerShell</h2>
    <div className="twocol">
      <img src="https://res.cloudinary.com/testingbetter/image/upload/v1658974279/szfdotapeonamqy4xpqe.jpg" />
      <div>
        <p>I made this app because I wanted to surface information to other helpdesk members without giving them access to sensitive systems. In Exchange there is no simple way to see which users have access rights to a shared mailbox, which meeting rooms have booking restrictions applied, and who can book book those rooms. This app solves this problem. It runs commands against v2 of exchange's REST api. The information is then passed back to the front end client. </p>
        <p> In addition to providing the access rights to mailboxes, calendars, and booking policies of rooms it can also get information from active directory, using the Get-ADUser commandletes in the Active Directory powershelll module. This app can tell if a users is locked out or not, and surface information about ad group membership.</p>
      </div>
    </div>
    <div className="badgeHolder">
      <div className="badgeOfHonor js"><img alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" /></div>
      <div className="badgeOfHonor node"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" /></div>
      <div className="badgeOfHonor ps"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" />
      </div>
  
    </div>
  </div>
  </div>
  </div>    
    );
  }
  
}

export default App;
