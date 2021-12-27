import React from "react"
import voorfoto from "../images/Project One/voorfoto.jpg";
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/any.scss";
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

const ProjectTwoPage = () => (
    <Layout>
        <SEO title="Marleen van der Eerden - Intuïtief Ontwerpen" />
        <div className="section project-sec" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Intuïtief Ontwerpen</h1>
                        <p style={{textAlign: "center"}}>Structuur en gecreëerde chaos komen in dit project samen. Een combinatie van origami, vuur, stofresten, een object en handelingen van onafhankelijke personen. Om zo tot uitkomsten te komen die van het ontwerp tot de fotoshoot niet te voorspellen waren. Met als uitdaging te reageren op wat je ziet gebeuren.</p>
                    </Fade>
                    <div className="grid2">
                        <Fade bottom cascade>
                            {data.projectTwo.map((project, index) => (
                                <img className={"photo"} src={project.imageSrc}/>
                            ))}
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectTwoPage
