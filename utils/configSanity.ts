// import { createClient } from "../../node_modules/next-sanity/dist/index"
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "1ws6spce",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
   
    

})