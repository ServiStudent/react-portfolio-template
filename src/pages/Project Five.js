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

const ProjectFivePage = () => (
    <Layout>
        <SEO title="Marleen van der Eerden - Eindcollectie KW1C" />
        <div className="section project-sec" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Eindcollectie KW1C</h1>
                        <p style={{textAlign: "center"}}>Eindexamen collectie op de opleiding Junior stylist Fashion & Design met als inspiratiebron drijvend plastic in de zee.</p>  </Fade>
                    <div className="grid2">
                        <Fade bottom cascade>
                            {data.projectFive.map((project, index) => (
                                <img className={"photo"} src={project.imageSrc}/>
                            ))}
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ProjectFivePage
