import React from "react";

const ProjectInfo = ({ nombre, subtitulo, descripcion, logo }) => (
  <section className="project-info" style={{ textAlign: "center", margin: "40px 0" }}>
    <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>{nombre}</h2>
    {subtitulo && <h3 style={{ fontWeight: 500, margin: "10px 0" }}>{subtitulo}</h3>}
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, marginTop: 30 }}>
      <div style={{ maxWidth: 400 }}>
        <p>{descripcion}</p>
      </div>
      {logo && <img src={logo} alt={nombre} style={{ maxWidth: 180 }} loading="lazy" decoding="async" />}
    </div>
  </section>
);

export default ProjectInfo;

