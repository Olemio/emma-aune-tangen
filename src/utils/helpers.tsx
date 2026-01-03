export const formatTitle = (title: string) => {
    return (
        title.split("/").pop()?.replace(".jpg", "").replaceAll("-", " ") ||
        title
    );
};

export function formatNOK(price: number) {
    return new Intl.NumberFormat("nb-NO", {
        style: "currency",
        currency: "NOK",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}
