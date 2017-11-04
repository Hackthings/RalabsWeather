//add custom exception as Weatherbit.io provides an error as respective field in JSON res object
export const forecastException = ({status, statusText}) => ({
    error: `Can't get city forecast`,
    status,
    message: statusText
});
