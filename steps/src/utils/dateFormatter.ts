const dateFormatter = (dateString: string): string => {
    if (dateString) {
        const date = new Date(dateString);
        const res = new Intl.DateTimeFormat("ru").format(date);
        return res;
    }
    return "";    
}

export { dateFormatter };