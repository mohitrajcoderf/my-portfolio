import { defineCollection, defineConfig } from "@content-collections/core"

const posts = defineCollection({
    name: "posts",
    directory: "src/app/posts",
    include: "**/*.md",
    schema: (z) => ({
        title: z.string(),
        summery: z.string(),
    }),
})

export default defineConfig({
    collections: [posts],
})