import React from "react";

const ProjectDetails = ({ area, precio, ubicacion, pdf }) => (
  <section className="project-details" style={{ textAlign: "center", margin: "40px 0" }}>
    <div style={{ display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap" }}>
      <div>
        <span style={{ fontWeight: 700 }}>ÁREA</span>
        <p>{area}</p>
      </div>
      <div>
        <span style={{ fontWeight: 700 }}>PRECIO DESDE</span>
        <p>{precio}</p>
      </div>
      <div>
        <span style={{ fontWeight: 700 }}>UBICACIÓN</span>
        <p>{ubicacion}</p>
      </div>
    </div>
    {pdf && (
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: 30,
          background: "#f47c20",
          color: "#fff",
          padding: "14px 38px",
          borderRadius: 6,
          fontWeight: 600,
          textDecoration: "none"
        }}
      >
        DESCARGAR PDF
      </a>
    )}
  </section>
);

export default ProjectDetails;
