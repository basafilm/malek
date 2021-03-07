import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

export function Skills(props) {
  const products = [
    {
      id: 1,
      frontend: "HTML",
      backend: "Express.js",
      dependencies: "Storybook",
      film: "Final Cut Pro",
    },

    {
      id: 2,
      frontend: "CSS",
      backend: "Node.js",
      dependencies: "Docker",
      film: "Premier Pro",
    },

    {
      id: 3,
      frontend: " JavaScript",
      backend: "Knex.js",
      dependencies: "Firebase",
    },

    {
      id: 4,
      frontend: "React - Bootstrap",
      backend: "Swagger",
      dependencies: "Strip",
    },

    {
      id: 5,
      frontend: "React",
      backend: "MySql",
      dependencies: "Jest",
    },

    {
      id: 6,
      frontend: "React Native",
      dependencies: "ESLint",
    },
  ];

  const columns = [
    {
      dataField: "frontend",
      text: "Front End",
      sort: true,
      headerTitle: true,
      headerStyle: {
        backgroundColor: "rgb(100, 100, 100)",
        borderColor: "transparent",
      },
      style: {
        backgroundColor: "rgb(9, 94, 179)",
        borderColor: "gray",
      },
    },
    {
      dataField: "dependencies",
      text: "Dependencies",
      sort: true,
      headerStyle: {
        backgroundColor: "rgb(100, 100, 100)",
        borderColor: "transparent",
      },
      style: {
        backgroundColor: "rgb(9, 94, 179)",
        border: "1px solid gray",
      },
    },
    {
      dataField: "backend",
      text: "Back End",
      sort: true,
      headerStyle: {
        backgroundColor: "rgb(100, 100, 100)",
        borderColor: "transparent",
      },
      style: {
        backgroundColor: "rgb(9, 94, 179)",
        borderColor: "gray",
      },
    },
    {
      dataField: "film",
      text: "Editing",
      sort: true,
      headerStyle: {
        backgroundColor: "rgb(100, 100, 100)",
        borderColor: "transparent",
      },
      style: {
        backgroundColor: "rgb(9, 94, 179)",
        borderColor: "gray",
      },
    },
  ];
  return (
    <Container class="pt-3">
      <h5>SKILLS:</h5>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        hover={true}
      />
    </Container>
  );
}
