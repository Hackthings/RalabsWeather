//Forecast Time To Live in milliseconds: 3h
export const forecastTTL = 30000;//10800000;

//Get current time in milliseconds since January 1, 1970
export const currentTime = () => {
    const currentDate = new Date();
    return currentDate.getTime();
};
