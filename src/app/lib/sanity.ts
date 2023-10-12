import { createClient } from "next-sanity";

const projectId = 'cue5e190'
const dataset = 'production'
const apiVersion = '2023-10-13'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})