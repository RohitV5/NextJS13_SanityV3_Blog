import { getDefaultDocumentNode } from './structure';
import { myTheme } from './theme';
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from 'components/StudioNavbar';
import Logo from 'components/Logo';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  name: "rohit_content_studio",
  title:"rohit_content_studio",
  projectId: projectId || "",
  dataset: dataset || "",
  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme:myTheme,
  studio:{
    components:{
      logo:Logo,
      navbar:StudioNavbar
    }
  }
});
