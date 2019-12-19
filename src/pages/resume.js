import React, {Component} from 'react';
import Head from '../components/head';
import TagCloud from '../components/tag-cloud';

export default class Index extends Component {
  render() {
    const title = 'Resume | Nil Késede';
    const description = 'Desenvolvedor Web multidisciplinar com profundo conhecimento em javascript, nodejs e php ' +
      'com oito anos de experiência de trabalho que corroboram meus conhecimentos e habilidades.';

    const skills = [
      {title: 'Acessibilidade', weight: 1},
      {title: 'Angular', weight: 5},
      {title: 'AWS', weight: 2},
      {title: 'Bootstrap', weight: 2},
      {title: 'CakePHP', weight: 2},
      {title: 'Canvas', weight: 2},
      {title: 'CSS', weight: 3},
      {title: 'Docker', weight: 1},
      {title: 'ES6', weight: 4},
      {title: 'Git', weight: 4},
      {title: 'Grunt', weight: 3},
      {title: 'Gulp', weight: 3},
      {title: 'HTML5', weight: 3},
      {title: 'IIS', weight: 1},
      {title: 'Ionic', weight: 1},
      {title: 'Java', weight: 1},
      {title: 'JavaScript', weight: 5},
      {title: 'Jeet', weight: 1},
      {title: 'Jekyll', weight: 2},
      {title: 'jQuery', weight: 3},
      {title: 'Laravel', weight: 4},
      {title: 'LESS', weight: 3},
      {title: 'MongoDB', weight: 3},
      {title: 'MySQL', weight: 3},
      {title: 'Nginx', weight: 2},
      {title: 'NodeJS', weight: 5},
      {title: 'NPM', weight: 2},
      {title: 'Objective-C', weight: 1},
      {title: 'OOP', weight: 1},
      {title: 'Photoshop', weight: 2},
      {title: 'PHP', weight: 5},
      {title: 'PostgreSQL', weight: 3},
      {title: 'React', weight: 5},
      {title: 'REST API', weight: 2},
      {title: 'SASS', weight: 4},
      {title: 'SEO', weight: 2},
      {title: 'Sketch', weight: 1},
      {title: 'Slim Framework', weight: 3},
      {title: 'TDD', weight: 3},
      {title: 'TypeScript', weight: 2},
      {title: 'UX', weight: 2},
      {title: 'VueJS', weight: 5},
      {title: 'Webpack', weight: 5},
      {title: 'Wordpress', weight: 3},
      {title: 'ZendFramework', weight: 2}
    ];

    return (
      <div className="container">
        <Head title={title} description={description}/>

        <header className="contact-info">
          <h1>Nil Késede</h1>
          <h2>Desenvolvedor Web Pleno</h2>
          <p>Fortaleza, Ceará, Brasil</p>
          <p>(85) 99661.8021</p>
          <p><a href="mailto:nil@ksde.pw?subject=Hi" target="_blank" rel="noopener noreferrer" title="email">nil@ksde.pw</a></p>
          <p><a href="/" target="_blank" rel="noopener noreferrer" title="ksde.pw">ksde.pw</a></p>
        </header>

        <section className="description">
          {/* eslint-disable-next-line react/no-danger  */}
          <p dangerouslySetInnerHTML={{__html: description}}/>
        </section>

        <section className="skills">
          <h3>Habilidades</h3>
          <TagCloud tags={skills}/>
        </section>

        <section className="previous-jobs">
          <h3>Experiência</h3>
          <p>Docner Software<br/>Frontend Developer<br/>jul de 2019 – dez de 2019</p>
          <p>Jetro Tecnologia<br/>Full Stack Developer<br/>mai de 2017 – jun de 2019</p>
          <p>Aim Comunicação<br/>Frontend Developer<br/>jan de 2017 – abr de 2017</p>
          <p>Briba Design<br/>Full Stack Developer<br/>set de 2011 – jan de 2017</p>
        </section>

        <section className="formation">
          <h3>Formação acadêmica</h3>
          <p>Instituto Federal de Educação, Ciência e Tecnologia do Ceará<br/>Tecnologia da Informação - Telemática<br/>2016 – 2019</p>
          <p>EEEP Juarez Távora<br/>Ensino Médio Técnico Integrado - Informática<br/>2009 – 2011</p>
        </section>

        <style jsx global>{`
        * { box-sizing: border-box; }
        html, body, #__next {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        body { font: 1em 'Courier New', Arial, sans-serif; }
        `}
        </style>
        <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 15px;
        }
        header { text-align: right; }
        header h1 { text-transform: uppercase; margin-top: 0; }
        header h2{ font-size: 1em }
        header p { margin: 10px 0; }
        section { margin-top: 50px; }
        section h3 { border-bottom: 1px solid black; }

        @media (min-width: 576px) {
          .container { width: 540px; }
        }
        @media (min-width: 768px) {
          .container { width: 720px; }
        }
        @media (min-width: 992px) {
          .container { width: 960px; }
        }
        @media (min-width: 1200px) {
          .container { width: 1100px; }
        }
        `}
        </style>
      </div>
    );
  }
}
