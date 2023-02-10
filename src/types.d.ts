export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy' | 'snowy';
export type Visibility = 'great' | 'good' | 'okay' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}