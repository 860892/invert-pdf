import { Layout } from "components/Layout"
import React from "react"

export default function Tile2x2() {
  return (
    <Layout>
      <div style={{ position: "absolute", right: 0, top: 0 }}>
        <a href="/">Invert Colour</a>
        <a href="/tile2x2/">Convert a PDF to 2x2</a>
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
          <h1>Free Online PDF 2x2 concatenator </h1>

          <p>Upload a PDF file to create a 2x2 concatenated pdf</p>

          <form encType="multipart/form-data" action="/2x2" method="POST">
            Choose a file to upload: <input name="uploadedfile" type="file" />
            <br />
            <input type="submit" value="Upload File" />
          </form>
        </div>
      </div>
    </Layout>
  )
}
