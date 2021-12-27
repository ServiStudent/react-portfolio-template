import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const ProjectFourPage = () => (
    <Layout>
        <SEO title="Marleen van der Eerden - Fungi" />
        <div className="section project-sec" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Fungi</h1>
                        <p style={{textAlign: "center"}}>De fungi, wat kan een fashion designer hiermee? Als groep zijn wij dit onderzoek gestart met als uitkomst een beeld wat zich ver in de toekomst afspeelt.

                            Kleding wat bestaat uit een zelf groeiend mycelium netwerk was het resultaat. Het kan groeien in de vorm die je voor ogen hebt en je kunt je eigen kleding repareren. Ook kan het, op het moment dat je bent overleden, met jou mee begraven worden zodat het nieuw leven kan krijgen en de cirkel rond is.</p>
                    </Fade>
                    <div className="grid2">
                        <Fade bottom cascade>
                            {data.projectFour.map((project, index) => (
                                <img className={"photo"} src={project.imageSrc}/>
                            ))}
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectFourPage
