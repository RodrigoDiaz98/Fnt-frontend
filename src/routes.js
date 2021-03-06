import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views sahdiahu
import Pacientes from "./views/Pacientes";
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import TeamsList from './views/TeamsList';
import TeamForm from './views/TeamForm';
import PacientesForms from './views/PacientesForms';
import Solicitudes from './views/Solicitudes';
import EditPaciente from './views/EditorPacienteForms';
import SolicitudesForms from './views/SolicitudesForms';
import Reservas from './views/Reservas'

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/pacientes" />
  },
  {
    path:"/editar-paciente",
    layout: DefaultLayout,
    component: EditPaciente ,
    
  },
  {
    path: "/pacientes",
    layout: DefaultLayout,
    component: Pacientes
  },
  {
    path: "/agregar-paciente",
    layout: DefaultLayout,
    component: PacientesForms
  },
  {
    path: "/solicitudes",
    layout: DefaultLayout,
    component: Solicitudes
  },
  {
    path: "/reservas",
    layout: DefaultLayout,
    component: Reservas
  },
  {
    path: "/agregar-solicitud",
    layout: DefaultLayout,
    component: SolicitudesForms
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/teams-list",
    layout: DefaultLayout,
    component: TeamsList
  },
  {
    path: "/teams-form",
    layout: DefaultLayout,
    component: TeamForm
  },
];
