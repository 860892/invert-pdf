import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"

function IndexPage() {
  return (
    <Layout>
      <a href="https://github.com/keotl/pdf-colour-invert">
        <img
          style={{ position: "absolute", top: 0, left: 0, border: 0 }}
          src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"
          alt="Fork me on GitHub"
        />
      </a>

      <div style={{ position: "absolute", right: 0, top: 0 }}>
        <Link to="/">Invert Colour</Link>
        <Link to="/tile2x2/">Convert a PDF to 2x2</Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20vh"
        }}
      >
        <div>
          <h1>Free Online PDF Colour Inverter</h1>

          <p>Upload a PDF file to invert its colour</p>

          <form encType="multipart/form-data" action="/convert" method="POST">
            Choose a file to upload: <input name="uploadedfile" type="file" />
            <br />
            <input type="submit" value="Upload File" />
          </form>

          <p style={{ paddingTop: "30px" }}>
            Processing may take several minutes to complete for large files.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
