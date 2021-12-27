import React from "react"
import voorfoto from "../images/Project One/voorfoto.jpg";
import Layout from "../components/layout"
import SEO from "../components/seo"
import vid from "../images/Project One/eindpresentatie wandkleed voices of fashion.mp4";
import ReactPlayer from "react-player";
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import Card from "../components/atoms/Card";
import CardPhotos from "../components/atoms/CardPhotos";
const ProjectOnePage = () => (
  <Layout>
    <SEO title="Marleen van der Eerden - Wandkleed" />
      <div className="section project-sec" id="work">
          <div className="container">
              <div className="work-wrapper">
                  <Fade bottom>
                      <h1>Wandkleed</h1>
                      <p style={{textAlign: "center"}}>Afgelopen zomer was er in het Centraal museum Utrecht een tentoonstelling te zien over black beauty, talent en cultuur, ‘The Voices of Fashion’. Er werd verwacht dat we ons in dit onderwerp verdiepen en tot een project komen dat hierop zou aansluiten.
                          Ik en twee ander meiden zijn op het idee gekomen om Peggy Bouva hiervoor te benaderen. Samen met Maartje Duin is zij de maker van de VPRO podcast De Plantage van onze Voorouders. <a href="https://www.vpro.nl/programmas/de-plantage-van-onze-voorouders.html">(Link naar de podcast)</a> Een zoektocht naar een gedeeld slavenverleden.
                          Ons idee is om Peggy’s deel van het verhaal te vertalen naar een wandkleed. Dit is nog in volle gang. In het filmpje is duidelijk te zien wat een rijkdom aan lessen en materiaal dit nu al met zich mee heeft gebracht. We zijn nog druk in de weer met deze materialen en verhalen om zo samen met Peggy tot het wandkleed te komen.</p>
                  </Fade>
                  <div className="grid2">
                      <Fade bottom cascade>
                          {data.projectOne.map((project, index) => (
                              <CardPhotos imgUrl={project.imageSrc}/>
                          ))}
                      </Fade>

                  </div>
                  <ReactPlayer style={{marginTop: 10}} volume={0} muted={true} url={vid} width="100%" height="100%" controls={true} />
              </div>
          </div>
      </div>
      </Layout>
)

export default ProjectOnePage
