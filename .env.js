const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAFEZBwLqZCvRZAAk5GVxlxVTjPDQmZB9ByFBh2dA0YxcJ9diL0yOyWP6ZB0tYFe3bw8lFl9bhuJGXDNBB4U4wkQuDZAZA6sqjYZABgEX5pl7TmP9l4ZAennJmSABLOQmqdXw7LebfUzsNmq3UuAZCSPLg8cSZB3sRrZBqKWSZA7WoZBUAC5JHEwb1DO3MSkIpndak5pdXorPrLVJ92',
    Meta_WA_SenderPhoneNumberId: '101580936177175',
    Meta_WA_wabaId: '104193235911486',
    Meta_WA_VerifyToken: '12345',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    return development;
    // if (environment === 'production') {
    //     return production;
    // } else if (environment === 'development') {
    //     return development;
    // } else {
    //     return fallback;
    // }
};
