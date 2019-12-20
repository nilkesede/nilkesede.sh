import React, {Component} from 'react';
import Head from '../components/head';
import TagCloud from '../components/tag-cloud';
import skills from '../lib/skills';

export default class Index extends Component {
  render() {
    const title = 'Currículo | Nil Késede';
    const description = 'Engenheiro de software desde 2011 com experiência em desenvolvimento web tanto back-end quanto front-end.';

    return (
      <div className="container">
        <Head title={title} description={description}/>

        <div className="row">
          <header className="contact-info col-xs-12 col-sm-4 " style={{width: '30%'}}>
            <h1>Nil Késede</h1>
            <h2>Web Developer</h2>
            +55 85 99661 8021<br/>
            <a href="https://linkedin.com/in/nilkesede" target="_blank" rel="noopener noreferrer" title="LinkedIn">linkedin.com/in/nilkesede</a><br/>
            <a href="https://github.com/nilkesede" target="_blank" rel="noopener noreferrer" title="GitHub">github.com/nilkesede</a><br/>
            <a href="mailto:nil@ksde.pw?subject=Hi" target="_blank" rel="noopener noreferrer" title="email">nil@ksde.pw</a><br/>
            <a href="/" target="_blank" rel="noopener noreferrer" title="ksde.pw">ksde.pw</a><br/>
          </header>

          <section className="description col-xs-12 col-sm-8 first-sm">
            <p>Sou engenheiro de software desde 2011, com experiência em desenvolvimento web back-end e front-end.</p>
            <p>Focado em criar e contribuir para aplicativos de alta disponibilidade e aprimorar a experiência do usuário com tecnologia modernas.</p>
            <p>Estou sempre procurando novos conhecimentos e melhores práticas em desenvolvimento de software.</p>
          </section>

          <section className="skills col-xs-12">
            <h3>Habilidades</h3>
            <TagCloud tags={skills}/>
          </section>

          <section className="experience col-xs-12">
            <h3>Experiência</h3>
            <p>
              <b>Docner Software | jul 2019 – dez 2019</b><br/>{' '}
              Trabalhei em projetos internacionais como desenvolvedor front-end, mantendo e implementando novos recursos.
              Também trabalhei em stories do core desenvolvido em Java.
            </p>
            <p>
              <b>Jetro Tecnologia | mai 2017 - jun de 2019</b><br/>{' '}
              Estive lá trabalhando em todas as camadas nos projetos internos, como desenvolvedor full-stack, desdes sites simples e de alto desempenho até ERP com integrações de API.
              As tecnologias usadas foram AngularJS, VueJS, NodeJS, PHP, Delphi, Object Pascal e PostgreSQL.
            </p>
            <p>
              <b>Aim Comunicação | jan 2017 - abr 2017</b><br/>{' '}
              Entrei para a equipe para atender à demanda instantânea, implementando temas WordPress, mantendo sistemas Laravel e e-commerces Magento.
            </p>
            <p>
              <b>Briba Design | set 2011 - dez 2016</b><br/>{' '}
              Comecei minha carreira profissional em uma agência web criando layouts com HTML, CSS, JavaScript e implementando-os como temas para WordPress e um CMS proprietário.<br/>{' '}
              Participei da criação de blogs, sites institucionais e e-commerces, trabalhei na otimização do CMS feito com o ASP clássico e conduzi a migração desse CMS para PHP e tecnologias de código aberto, além de fazer algumas manutenções e melhorias em aplicativos Android.
            </p>
          </section>

          <section className="education col-xs-12">
            <h3>Educação</h3>
            <p>Instituto Federal de Educação, Ciência e Tecnologia do Ceará<br/>Tecnologia da Informação - Telemática<br/>2016 – 2019</p>
            <p>EEEP Juarez Távora<br/>Ensino Médio Técnico Integrado - Informática<br/>2009 – 2011</p>
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
    );
  }
}
