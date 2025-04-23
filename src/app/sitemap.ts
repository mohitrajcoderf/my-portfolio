export default () => {
    const routes = ["", "/writing", "/colophon"].map((route) => ({
        url: `https://mohitraj.xyz${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes];
};