import React, {Component} from 'react';
import Head from '../components/head';
import TagCloud from '../components/tag-cloud';

export default class Index extends Component {
  render() {
    const title = 'Resume | Nil Késede';
    const description = 'Sou desenvolvedor web frontend e backend com profundo conhecimento em html, css, javascript, nodejs e php. ' +
        'Tenho oito anos de experiência de trabalho que corroboram meus conhecimentos e habilidades.';
    const skills = [
      {title: 'Acessibilidade', weight: 1},
      {title: 'Angular', weight: 2},
      {title: 'AWS', weight: 3},
      {title: 'Bootstrap', weight: 4},
      {title: 'CakePHP', weight: 5},
      {title: 'Canvas', weight: 1},
      {title: 'CSS', weight: 1},
      {title: 'Docker', weight: 1},
      {title: 'ES6', weight: 1},
      {title: 'Git', weight: 1},
      {title: 'Grunt', weight: 1},
      {title: 'Gulp', weight: 1},
      {title: 'HTML5', weight: 1},
      {title: 'IIS', weight: 1},
      {title: 'Ionic', weight: 1},
      {title: 'Java', weight: 1},
      {title: 'JavaScript', weight: 1},
      {title: 'Jeet', weight: 1},
      {title: 'Jekyll', weight: 1},
      {title: 'jQuery', weight: 1},
      {title: 'JSON', weight: 1},
      {title: 'Laravel', weight: 1},
      {title: 'LESS', weight: 1},
      {title: 'MongoDB', weight: 1},
      {title: 'MySQL', weight: 1},
      {title: 'Nginx', weight: 1},
      {title: 'NodeJS', weight: 1},
      {title: 'NPM', weight: 1},
      {title: 'Objective-C', weight: 1},
      {title: 'OOP', weight: 1},
      {title: 'Photoshop', weight: 1},
      {title: 'PHP', weight: 1},
      {title: 'PostgreSQL', weight: 1},
      {title: 'React', weight: 1},
      {title: 'REST API', weight: 1},
      {title: 'SASS', weight: 1},
      {title: 'SEO', weight: 1},
      {title: 'Sketch', weight: 1},
      {title: 'Slim Framework', weight: 1},
      {title: 'TDD', weight: 1},
      {title: 'TypeScript', weight: 1},
      {title: 'UX', weight: 1},
      {title: 'VueJS', weight: 1},
      {title: 'Webpack', weight: 1},
      {title: 'Wordpress', weight: 1},
      {title: 'ZendFramework', weight: 1}
    ];

    return (
      <div className="container">
        <Head title={title} description={description}/>

        <header>
          <h1>Nil Késede</h1>
          <h2>Desenvolvedor Web Pleno</h2>
          <p>Fortaleza, Ceará, Brasil</p>
          <p>(85) 99661.8021</p>
          <p><a href="mailto:nil@ksde.pw?subject=Hi" target="_blank" rel="noopener noreferrer" title="email">nil@ksde.pw</a></p>
          <p><a href="/" target="_blank" rel="noopener noreferrer" title="ksde.pw">ksde.pw</a></p>
        </header>

        <section>
          <p>{description}</p>
        </section>

        <section>
          <h3>Habilidades</h3>
          <TagCloud tags={skills}/>
        </section>

        <section>
          <h3>Experiência</h3>
          <p>Docner Software<br/>Frontend Developer<br/>jul de 2019 – dez de 2019</p>
          <p>Jetro Tecnologia<br/>Full Stack Developer<br/>mai de 2017 – jun de 2019</p>
          <p>Aim Comunicação<br/>Frontend Developer<br/>jan de 2017 – abr de 2017</p>
          <p>Briba Design<br/>Full Stack Developer<br/>set de 2011 – jan de 2017</p>
        </section>

        <section>
          <h3>Formação acadêmica</h3>
          <p>Instituto Federal de Educação, Ciência e Tecnologia do Ceará<br/>Tecnologia da Informação - Telemática<br/>Período 2016 – 2019</p>
          <p>EEEP Juarez Távora<br/>Ensino Médio Técnico Integrado - Informática<br/>Período 2009 – 2011</p>
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
        header { text-align: right; margin-bottom: 60px; }
        header h1 { text-transform: uppercase; }
        header h2{ font-size: 1em }
        header p { margin: 10px 0; }
        section { margin: 50px 0; }
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
          .container { width: 1140px; }
        }
        `}
        </style>
      </div>
    );
  }
}
