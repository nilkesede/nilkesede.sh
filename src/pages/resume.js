import {Head, TagCloud} from '../components'
import skills from '../lib/skills'

const title = 'Resume | Nil Késede'
const description = 'Software engineer since 2011 with experience in both back-end and front-end web development.'

const Resume = () => (
  <div className="container">
    <Head title={title} description={description}/>

    <div className="row">
      <header className="contact-info col-xs-12 col-sm-4 " style={{width: '30%'}}>
        <h1>Nil Késede</h1>
        <h2>Web Developer</h2>
        +55 85 99661 8021<br/>
        <a href="https://linkedin.com/in/nilkesede" target="_blank" rel="noopener noreferrer" title="LinkedIn">linkedin.com/in/nilkesede</a><br/>
        <a href="https://github.com/nilkesede" target="_blank" rel="noopener noreferrer" title="GitHub">github.com/nilkesede</a><br/>
        <a href="mailto:nil@ksde.pw" target="_blank" rel="noopener noreferrer" title="email">nil@ksde.pw</a><br/>
        <a href="/" target="_blank" rel="noopener noreferrer" title="ksde.pw">ksde.pw</a><br/>
      </header>

      <section className="description col-xs-12 col-sm-8 first-sm">
        <p>I&#39;m a software engineer since 2011 with experience in both front-end and back-end web and mobile development.</p>
        <p>Focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks, I&#39;m always looking for new knowledge and best practices in software development.</p>
      </section>

      <section className="skills col-xs-12">
        <h3>Skills</h3>
        <TagCloud tags={skills}/>
      </section>

      <section className="experience col-xs-12">
        <h3>Experience</h3>
        <p>
          <b>Docner Software | jul 2019 – jan 2020</b><br/>{' '}
          Worked on international projects as front-end developer, maintaining and implementing new features.<br/>{' '}
          React, React Native, GraphQL, NodeJS, MongoDB.
        </p>
        <p>
          <b>Jetro Tecnologia | may 2017 - jun de 2019</b><br/>{' '}
          I&#39;d been there working on each layer in all the internal projects as full-stack developer, even simple and performer websites to entire ERP with API integrations.<br/>{' '}
          The stack includes techs like AngularJS, VueJS, NodeJS, PHP, Delphi, Object Pascal and PostgreSQL.
        </p>
        <p>
          <b>Briba Design | sep 2011 - jan 2017</b><br/>{' '}
          I started my professional career in a web agency building layouts with HTML, CSS, JavaScript and implementing them as themes for WordPress and a proprietary CMS.<br/>{' '}
          I participated in the creation of blogs, institutional websites, and e-commerce, worked on optimizing the CMS made with Classic ASP and led the migration of this CMS to PHP and open source technologies, as well as doing some maintenance and improvements on Android apps.
        </p>
      </section>
    </div>

    <style jsx global>{`
        html, body, #__next { width: 100%; }
        body { font-family: 'Courier New', Arial, sans-serif; }
        `}
    </style>
    <style jsx>{`
        .container {
          padding: 15px;
        }
        .contact-info {
          text-align: right;
          margin-bottom: 23px;
        }
        .contact-info h1 {
          text-transform: uppercase;
          margin: 0 0 5px;
        }
        .contact-info h2 {
          font-size: 1rem;
          margin-top: 0;
        }
        section h3 {
          border-bottom: 1px solid black;
        }
        section p {
          text-align: justify;
        }
        .skills {
          margin-bottom: 17px;
        }
        @media only screen and (min-width: 48em) {
          .contact-info {
            margin-bottom: 0;
          }
          .skills {
            margin-top: 15px;
          }
        }
        `}
    </style>
  </div>
)

export default Resume
