import {createCurrentUserHook, createClient} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'; //npm install @sanity/image-url - to install it before importing

export const config = {

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",

    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);


export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);