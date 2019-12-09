import React, { Component } from "react";

class Editor extends Component {
  state = {
    firstName: "Gabriela",
    lastName: "Martinez",
    title: "Digital Designer",
    email: "gabriela.martinez@thiswayglobal.com"
  };

  render() {
    return (
      <div className="App" style={{ display: "flex", minHeight: "80vh" }}>
        <div
          class="column"
          style={{
            flex: "0 0 50%"
          }}
        >
          <div
            style={{
              margin: 50,
              borderRadius: 5
            }}
          >
            <div style={{ width: "100%", padding: 20 }}>
              <input
                placeholder="First Name"
                onChange={e => this.setState({ firstName: e.target.value })}
                style={{
                  border: "none",
                  width: "35%",
                  fontSize: "",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.15)",
                  borderRadius: 5,
                  padding: ".5rem 1.5rem"
                }}
              />
              <input
                placeholder="Last Name"
                onChange={e => this.setState({ lastName: e.target.value })}
                style={{
                  marginLeft: "1rem",
                  width: "35%",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.15)",
                  fontSize: "",
                  border: "none",
                  borderRadius: 5,
                  padding: ".5rem 1.5rem"
                }}
              />
            </div>
            <div style={{ width: "100%", padding: 20 }}>
              <input
                placeholder="Job Title"
                onChange={e => this.setState({ title: e.target.value })}
                style={{
                  width: "35%",
                  fontSize: "",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.15)",
                  border: "none",
                  borderRadius: 5,
                  padding: ".5rem 1.5rem"
                }}
              />
              <input
                placeholder="Email Address"
                onChange={e => this.setState({ email: e.target.value })}
                style={{
                  width: "35%",
                  fontSize: "",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.15)",
                  marginLeft: "1rem",
                  border: "none",
                  borderRadius: 5,
                  padding: ".5rem 1.5rem"
                }}
              />
            </div>
          </div>
        </div>
        <div class="column" style={{ flex: "0 0 50%" }}>
          <div
            style={{
              height: "100%",
              margin: 50,
              padding: 10,
              borderRadius: 5,
              justifyContent: "flex-start"
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<table style="width: 400px; font-size: 9pt; font-family: Arial, sans-serif; line-height:normal;" cellpadding="0" cellspacing="0">
<tbody>
 <tr>
  <td style=" font-size:12pt; font-family:Arial,sans-serif; color:#1793ce; padding-bottom:6px;  width:259px">
  <span style="font-family: Verdana, sans-serif; color:#03a1b1; font-weight: bold">${this.state.firstName} ${this.state.lastName}</span>
  <span style="font-family: Arial, sans-serif; color:#878787; font-size: 10pt;"><span style="font-family: Verdana, sans-serif; color:#878787"><br>${this.state.title}</span></span>
  </td>
  <td style=" width:141px;  padding-bottom:6px; text-align:right;">
   <a href="https://www.thiswayglobal.com/" target="_blank"><img border="0" alt="Logo" height="36" style="width:auto; height:36px; border:0;" src="https://s3-us-east-2.amazonaws.com/www.thiswayglobal.com/wp-content/uploads/2019/03/26131641/twg-logo.png"></a>
  </td>
 </tr>
 <tr><td style="width:400px; border-top:1px solid; border-top-color:#03a1b1;" colspan="2" width="400">&nbsp;</td></tr>
 <tr>
  <td style=" font-size: 10pt; font-family: Arial, sans-serif; font-weight:bold; color: #2c2c2c; width:400px;" colspan="2" width="400">
  <span style="font-family: Verdana, sans-serif; color:#1c2a39">ThisWay Global</span>
  </td>
 </tr>
 <tr>
  <td style=" font-size: 10pt; font-family: Arial, sans-serif; color: #2c2c2c; width:400px;" colspan="2" width="400">
  <span style="font-family: Verdana, sans-serif; color:#1c2a39">Austin, TX</span>
  </td>
 </tr>
 <tr>
  <td style=" font-size: 10pt; font-family: Arial, sans-serif; color: #2c2c2c; width:400px;" colspan="2" width="400">
  <span style="font-family: Verdana, sans-serif; color:#1c2a39">e: <a href="mailto:${this.state.email}">${this.state.email}</a></span>
  </td>
 </tr>
 <tr><td style="width:400px;" colspan="2" width="400">&nbsp;</td></tr>
 <tr>
  <td style=" font-size: 10pt; font-family: Arial, sans-serif; font-weight:bold; color: #1793ce; width:200px; height:15px;" width="200">
  <span style="display:inline-block; height:15px; font-family: Arial, sans-serif; font-size: 9pt;"><a href="http://www.thiswayglobal.com" target="_blank" style="text-decoration:none;"><span style="font-family:Verdana, sans-serif; color:#03a1b1">www.thiswayglobal.com</span></a></span>
  </td>
  <td style="width:200px; text-align:right;" width="200"><span style="display:inline-block; height:15px;"><span><a href="https://www.facebook.com/thiswayglobal" target="_blank"><img alt="Facebook icon" border="0" width="15" height="15" style="border:0; height:15px; width:15px" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator/all-inclusive/fb.png"></a>&nbsp;&nbsp;&nbsp;</span><span><a href="https://www.linkedin.com/company/thisway-global/" target="_blank"><img alt="LinkedIn icon" border="0" width="15" height="15" style="border:0; height:15px; width:15px" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator/all-inclusive/ln.png"></a>&nbsp;&nbsp;&nbsp;</span><span><a href="https://twitter.com/thiswayglobal" target="_blank"><img alt="Twitter icon" border="0" width="15" height="15" style="border:0; height:15px; width:15px" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator/all-inclusive/tt.png"></a>&nbsp;&nbsp;&nbsp;</span></span>
  </td>
 </tr>
 <tr><td style="width:400px;" colspan="2" width="400">&nbsp;</td></tr>
 <tr>
  <td style=" font-size:8pt; font-family:Arial,sans-serif; color:#878787; width:400px; text-align:justify;" colspan="2" width="400">
  <span style="font-family: Verdana, sans-serif; color:#878787">The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</span>
  </td>
 </tr>	
</tbody>
</table>`
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
