const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAICkAeiM5IaXbbpiTbfv8PB6WgBhf1ZAdm8zjeXnnrs9rM32sPJ44ySGR8uyW71P1qrGZAYYXudNFws5i8M0fDPvaczHpOeIzA6ZBsXF7ZCFQqzFsPW29rvX5VPysCOlpaPEZAxNESkZBz5rXWfgpIg1OYskMwy5naQYNmCeUEATraYZAGDfY28puheVppZCCgmwb9EE2RBk',
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
