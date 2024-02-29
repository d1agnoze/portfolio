import { Ascii } from "./Ascii";
import { style } from "./style";

const info = (
  <span>
    <strong>Who am i?</strong> <br />
    I am <strong>Nguyen Dac Vuong</strong>
    <div style={{ display: "flex", gap: "5px", alignItems: "start" }}>
      <img
        src="https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-xay-dung-inkythuatso-01-13-15-35-18.jpg"
        style={{ flex: "flex: 0 0 auto" }}
        height={40}
        width={49}
      />
      <p style={{ margin: 0, flex: "1" }}>
        🎓 an upcoming graduate from <br />
        <strong style={style.oceanBlue}>
          Hanoi University of Civil Engineering.
        </strong>
      </p>
    </div>
    I love computer and i LOVE making stuffs on computer, especially{" "}
    <span style={style.lime}>web applications</span> and{" "}
    <span style={style.lime}>tools</span> to help other developers.
  </span>
);
const work_experience = (
  <div>
    <strong style={style.peach}>Work Experience</strong>
    <Ascii>
      {`+--------------------------+--------------------------------------------------------------------------------+
| June 2023 - Febuary 2024 | VNCLOUD JSC                                                                    |
|                          | Full-stack web developer                                                       |
|                          | Tech stack: .NET Core, Angular, SQL Server                                     |
|                          | Main responsibilities:                                                         |
|                          | - Work on both the front-end and back-end of the application,                  |
|                          | fix ongoing bugs, and implement new features as well as improving the old ones |
+--------------------------+--------------------------------------------------------------------------------+
`}
    </Ascii>
  </div>
);
const project = (
  <span>
    <strong style={style.orange}>Projects</strong>
    <Ascii>
      {`+--------------------------+--------------------------------------------------------------------------------+

        ▄████████████████▄         PROJECT NAME: TMSS - TOYOTA MARKETING SALE SERVICE
     ▄███▀────▄████▄────▀███▄  
  ▄███▀──────▄█▀──▀█▄──────▀███▄   DESCRIPTION: A streamlined web application used by Toyota employees to oversee
▄███▄───────██──────██───────▄███▄ automotive spare parts inventory, import/export, repair services, and customer
██─▀██▄▄▄▄──██──────██──▄▄▄▄██▀─██ relations for efficient management. Achieved optimized processes, ensuring regulatory
██───▀▀▀██████████████████▀▀▀───██ compliance and enhancing customer satisfaction, contributed to elevating industry
▀██▄────────██▄────▄██────────▄██▀ standards through innovative solutions and effective management practices.
 ▀██▄───────▀██▄──▄██▀───────▄██▀  
     ▀███▄────▀████▀────▄███▀      TEAM SIZE: 10
        ▀████████████████▀         ROLE: Full-Stack Developer
`}
    </Ascii>
    <br />
    <strong style={style.peach}>Personal Project</strong>
    <br />
    <strong>FIRECHAT</strong> <br />
    <a>https://github.com/d1agnoze/firechat</a>
    {" :"}
    Chat app made with React and Firebase<br />
    <br />
    <strong>E-COMMERCE WEBSITE</strong>
    <br />
    <a>https://github.com/linhlban150612/ASPP</a>
    {" :"}
    Sneaker store built with classic ASP <br />
    <br />
    <strong>SECRET SAVER APP</strong>
    <br />
    <a>https://locker.vdac.id.vn</a>
    {" :"}
    a simple web application for saving your secrets( i promise it secured){" "}
    <br />
  </span>
);

export const commands = {
  help: (
    <span>
      <strong>clear</strong> - clears the console. <br />
      <strong style={style.green}>display</strong>{" "}
      - Change the prompt of the terminal. <br />
      <strong style={style.magenta}>experience</strong>{" "}
      - Change the prompt of the terminal. <br />
      <strong style={style.yellow}>projects</strong>{" "}
      - Change the prompt of the terminal. <br />
      <strong style={style.cyan}>education</strong>{" "}
      - Change the prompt of the terminal. <br />
      <strong style={style.red}>contact</strong>{" "}
      - Change the prompt of the terminal.
    </span>
  ),
  display: <span></span>,
  info: info,
  experience: work_experience,
  projects: project,
  education: <span>Edu</span>,
  contact: <span>Contact</span>,
};

export const welcome = (
  <Ascii>
    {`
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝

Welcome to my porfolio, 
I am Nguyen Dac Vuong, a ${(new Date()).getFullYear() - 2002
      } year old web developer with a passion for technology and computer.
Have a look around and feel free to contact me.

----------If you feel lost----------------
❓ Use 'help' for a list of available commands.
🎯 Use 'display' to showcase all data about me
`}
  </Ascii>
);
