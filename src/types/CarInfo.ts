export type cardInfo = {
    title: string | React.ReactNode;
    time: string;
    bgColor?: string;
}

export type CarExperience = {
    title: string;
    icon?: React.ReactNode;
    bgColor?: string;
    cardInfo: cardInfo[];
};