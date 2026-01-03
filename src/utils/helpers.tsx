export const formatTitle = (title: string) => {
    return (
        title.split("/").pop()?.replace(".jpg", "").replaceAll("-", " ") ||
        title
    );
};
