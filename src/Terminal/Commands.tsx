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
      {` +--------------------------+--------------------------------------------------------------------------------+

        ▄████████████████▄           PROJECT NAME: TMSS - TOYOTA MARKETING SALE SERVICE
     ▄███▀────▄████▄────▀███▄        (2023 - 2024)
  ▄███▀──────▄█▀──▀█▄──────▀███▄     DESCRIPTION: A streamlined web application used by Toyota employees to oversee
▄███▄───────██──────██───────▄███▄   automotive spare parts inventory, import/export, repair services, and customer
██─▀██▄▄▄▄──██──────██──▄▄▄▄██▀─██   relations for efficient management. Achieved optimized processes, ensuring regulatory
██───▀▀▀██████████████████▀▀▀───██   compliance and enhancing customer satisfaction, contributed to elevating industry
▀██▄────────██▄────▄██────────▄██▀   standards through innovative solutions and effective management practices.
 ▀██▄───────▀██▄──▄██▀───────▄██▀    
     ▀███▄────▀████▀────▄███▀        TEAM SIZE: 10
        ▀████████████████▀           ROLE: Full-Stack Developer

+--------------------------+--------------------------------------------------------------------------------+
`}
    </Ascii>
    <br />
    <strong style={style.peach}>Personal Project</strong>
    <br />
    <strong>FIRECHAT</strong> <br />
    <a href="https://github.com/d1agnoze/firechat">Firechat</a>
    {": "}
    Chat app made with <span style={style.cyan}>React</span> and{" "}
    <span style={style.orange}>Firebase</span>
    <br />
    <br />
    <strong>E-COMMERCE WEBSITE</strong>
    <br />
    <a href="https://github.com/linhlban150612/ASPP">OBDG</a>
    {": "}
    Sneaker store built with <span style={style.red}>classic ASP</span> <br />
    <br />
    <strong>SECRET SAVER APP</strong>
    <br />
    <a href="https://locker.vdac.id.vn">Locker</a>
    {": "}
    A simple <span style={style.gray}>Nextjs</span>{" "}
    web application dedicated to saving your secrets (i promise it's secured)
    {": "}
    <br />
  </span>
);
const education = (
  <span>
    <strong style={style.yellow}>Education</strong>
    <br />
    ------------------------------------------------------------------
    <table style={{ width: "80%" }}>
      <tr>
        <td>June 2023 - Febuary 2024</td>
        <td>
          VNCLOUD JSC Full-stack web developer Main responsibilities: - Work on
          both the front-end and back-end of the application, fix ongoing bugs,
          and implement new features as well as improving the old ones
        </td>
        <td>
          <img
            src="https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-xay-dung-inkythuatso-01-13-15-35-18.jpg"
            style={{ flex: "flex: 0 0 auto" }}
            height={40}
            width={49}
          />
        </td>
      </tr>
    </table>
    ------------------------------------------------------------------
  </span>
);

const contact = (
  <span>
    <strong style={style.lime}>📞 Contact Me!</strong>
    <br />
    ------------------------------------------------------------------
    <table style={{ width: "80%" }}>
      <tr>
        <th>Logo</th>
        <th>Platform</th>
        <th>Link</th>
      </tr>
      <tr>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
            style={{ flex: "flex: 0 0 auto" }}
            height={20}
            width={20}
          />
        </td>
        <td>Github</td>
        <td>
          <a>https://github.com/d1agnoze</a>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            style={{ flex: "flex: 0 0 auto" }}
            height={20}
            width={20}
          />
        </td>
        <td>LinkedIn</td>
        <td>
          <a>www.linkedin.com/in/vuong-dac-65b0732b0</a>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
            style={{ flex: "flex: 0 0 auto" }}
            height={20}
            width={20}
          />
        </td>
        <td>Facebook</td>
        <td>
          <a>https://www.facebook.com/d1agnoze</a>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
            style={{ flex: "flex: 0 0 auto" }}
            height={20}
            width={20}
          />
        </td>
        <td>Zalo</td>
        <td>
          <a>(+84) 971652973</a>
        </td>
      </tr>
    </table>
    <br />
  </span>
);

const skill = (
  <span>
    <strong style={style.lime}>💪 Skill</strong>
    <br />
    <Ascii>
      {`+----------------------+------------------------------------------------------------------------------------------+
| Language             | English (Intermediate)                                                                   |
| Computer             | Adequate skills in working with Microsoft Office applications, Linux Kernel and programs |
| Programing Languages | C#, JavaScript, C++, Bash, Python                                                        |
| Framework            | .NET, Angular, React, NextJs                                                             |
+----------------------+------------------------------------------------------------------------------------------+ `}
    </Ascii>
  </span>
);

const certs = (
  <span>
    <strong style={style.lime}>📜 Certifications</strong>
    <br />
    <span style={style.white}>Foundational C# with Microsoft</span>
    <br />
    <span style={style.oceanBlue}>2023</span>{" "}
    <a href="https://www.freecodecamp.org/certification/vdac/foundational-c-sharp-with-microsoft">
      certification link
    </a>{" "}
    <br />
    ------------------------------------------------------------------<br />
  </span>
);

export const commands = {
  help: (
    <span>
      <strong>clear</strong> - clears the console. <br />
      <strong style={style.lime}>display</strong>{" "}
      - Showcase all the informations<br />
      <strong style={style.oceanBlue}>info</strong>{" "}
      - Display my background & my personal information.<br />
      <strong style={style.yellow}>exp</strong>{" "}
      - Display my work experience.<br />
      <strong style={style.red}>projects</strong>{" "}
      - Display my projects throughout my career.<br />
      <strong style={style.magenta}>edu</strong>{" "}
      - Display my academic background<br />
      <strong style={style.orange}>contact</strong> - All my contact info<br />
      <strong style={style.peach}>sklls</strong>{" "}
      - Display my skills (Notes: It gets bigger with time)<br />
      <strong style={style.gray}>certs</strong>{" "}
      - All my certifications so far (def getting longer)<br />
    </span>
  ),
  display: (
    <span>
      {info}
      ------------------------------------------------------------------<br />
      {education}
      ------------------------------------------------------------------<br />
      {skill}
      ------------------------------------------------------------------<br />
      {work_experience}
      ------------------------------------------------------------------<br />
      {project}
      ------------------------------------------------------------------<br />
      {certs}
      ------------------------------------------------------------------<br />
      {contact}
      ------------------------------------------------------------------<br />
    </span>
  ),
  info: info,
  exp: work_experience,
  projects: project,
  edu: education,
  contact: contact,
  sklls: skill,
  certs: certs,
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
