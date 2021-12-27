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

const ProjectThreePage = () => (
    <Layout>
        <SEO title="Marleen van der Eerden - Serie Reconstructies" />
        <div className="section project-sec" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Serie Reconstructies</h1>
                        <p style={{textAlign: "center"}}>Na een onderzoek naar de surrealist Rene Magritte, tot een serie komen. Een serie reconstructies met hergebruikte materialen.</p>
                    </Fade>
                    <div className="grid2">
                        <Fade bottom cascade>
                            {data.projectThree.map((project, index) => (
                                <img className={"photo"} src={project.imageSrc}/>
                            ))}
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectThreePage
