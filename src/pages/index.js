import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section>
      <h2> Section 1 </h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida turpis id luctus posuere. Duis a tempor mauris. Ut sollicitudin et velit sed euismod. Sed tempor cursus erat, ut accumsan massa faucibus non. Nulla facilisi. Suspendisse potenti. Nullam vitae lectus felis. Vivamus tempor eget massa in mattis. Nulla pharetra, risus vitae scelerisque hendrerit, mauris nunc faucibus massa, in tincidunt felis tellus at nulla. Sed rutrum, urna et porttitor accumsan, lectus eros volutpat lacus, nec consectetur mi arcu quis diam. Integer lobortis nibh nec felis efficitur hendrerit. </p>
    </section>

    <section>
    <h2> Section 2 </h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida turpis id luctus posuere. Duis a tempor mauris. Ut sollicitudin et velit sed euismod. Sed tempor cursus erat, ut accumsan massa faucibus non. Nulla facilisi. Suspendisse potenti. Nullam vitae lectus felis. Vivamus tempor eget massa in mattis. Nulla pharetra, risus vitae scelerisque hendrerit, mauris nunc faucibus massa, in tincidunt felis tellus at nulla. Sed rutrum, urna et porttitor accumsan, lectus eros volutpat lacus, nec consectetur mi arcu quis diam. Integer lobortis nibh nec felis efficitur hendrerit. </p>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iMacxZQMPXs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>

    <section>
      <h2> Section 3 </h2>
      
    </section>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
